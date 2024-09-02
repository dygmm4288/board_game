from sqlalchemy.orm import Session
from http_exceptions import raise_http_exception
from models import Room as RoomModel
from models import User as UserModel
from schemas import Room
from datetime import datetime
from utils import debug
from typing import Dict, Tuple
from crud.miniville_crud import *
import json

def create_room(
    max_players: int,
    game_name: str,
    db: Session) -> RoomModel:
    now = datetime.now()

    room = RoomModel(
        status='waiting',
        max_players=max_players,
        created_at=now,
        game_name=game_name,
    )
    
    db.add(room)

    return room
  

def put_room(confirm:str, _room:Room, user: UserModel, updates: Dict, db:Session) :
  if confirm == '참여' :

    if _room.status != 'waiting' or user in _room.players :
      raise_http_exception()
    
    _room.players.append(user)
  
  elif confirm == '방나가기': 

    if not user.room_id :
      raise_http_exception()
      
    _room.players.remove(user)

    if len(_room.players) == 0 :
      db.delete(_room)
      return
      
  
  #--------------------------------------
  # 게임 룰
  #--------------------------------------
  elif confirm == '게임시작' :
    MIN_PLAYERS = 2
    debug(len(_room.players))
    if len(_room.players) < MIN_PLAYERS :
      raise_http_exception()
    _room = init_game(_room)

    _room.status = 'in-progress'
  
  elif confirm == '주사위굴리기':
    NOT_ROLL_TURN = 0
    roll_cnt = updates['roll_cnt']

    if _room.game_status != 'dice' or not roll_cnt : raise_http_exception()

    dice_result = roll_dice(_room.game_json, _room.turn, roll_cnt)
    
    if dice_result[0] == NOT_ROLL_TURN : pass
    
    _room = roll_turn(dice_result,_room)
    
    _room.status = 'purchase'
  
  elif confirm == '구매하기' :
    if _room.status != 'purchase' : raise_http_exception()

    field_name, field_card, deck_name = updates
    
    _room = purchase(_room, field_name, field_card, deck_name)
    _room.status = 'dice' 

    if check_end_game(_room) :
      _room.status = 'end-game'
    
  return _room
    

def get_room(r_id:int, db:Session) :
  result = db.query(RoomModel).filter(RoomModel.id == r_id).first()
  return result
  
def get_rooms(db:Session) :
  result = db.query(RoomModel).filter(RoomModel.status == 'waiting').all()
  return result

def init_game(room:RoomModel) :
  '''
  게임 초기화
  '''
  from server.app.crud.miniville_crud import get_deck,set_field,shuffle_deck, init_players
  room.turn = 0
  room.game_status = 'dice'

  debug(get_deck('est16'))

  deck_16 = shuffle_deck(get_deck('est16'))
  deck_712 = shuffle_deck(get_deck('est712'))
  deck_landmarks = shuffle_deck(get_deck('landmark'))
  
  field_16 = set_field({}, deck_16)
  field_712 = set_field({}, deck_712)
  field_landmarks = set_field({}, deck_landmarks)
  
  players = init_players(room.players)

  game_status = {
    'deck_16' : deck_16,
    'deck_712' : deck_712,
    'deck_landmarks' : deck_landmarks,
    
    'field_16' : field_16,
    'field_712' : field_712,
    'field_landmarks' : field_landmarks,
    
    'players' : players
  }


  room.game_json = json.dumps(game_status, ensure_ascii=False,default=lambda x: x)

  return room

def roll_turn(roll_result:Tuple[int, bool], room: RoomModel) :
  dice, same_dice = roll_result

  roll_player = get_current_player_index(room)
  length_player = get_player_length(room)

 # 주사위를 돌린 사람 제외
  for i in range(1, length_player) :
    cur_player = room.players[roll_player + i]

    room = check_red_card(room, roll_player, cur_player, dice) 
    
 # 주사위 돌린 사람 포함
  for i in range(length_player) :
    cur_player = room.players[roll_player + i]

    room = check_blue_card(room, cur_player) 
  
  room = check_green_card(room, cur_player)
  room = check_purple_card(room, cur_player)
  
  return room
  
def purchase(room:RoomModel, field_name:str, field_card:int, deck_name: str) :
  game_status = get_game_status(room)
  
  game_status[field_name][field_card] -= 1

  if game_status[field_name][field_card] == 0 :
    game_status[field_name] = set_field(game_status[field_name], game_status[deck_name])


  roll_player = get_current_player_index(room)
  
  game_status['players'][roll_player].cards.append(field_card)
  
  room.game_json = json.dumps(game_status, ensure_ascii=False, default=lambda x: x)
    
  return room

   
def check_end_game(room:RoomModel) :
  game_status = get_game_status(room)
  
  players = game_status['players']
  
  return any(map(is_more_4_landmarks, players))