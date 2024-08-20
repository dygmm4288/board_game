from sqlalchemy.orm import Session
from http_exceptions import raise_http_exception
from models import Room as RoomModel
from models import User as UserModel
from schemas import Room,User
from datetime import datetime
from utils import debug
from typing import Dict
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
    pass
  
  elif confirm == '구매하기' :
    pass
  
  elif confirm == '다음턴넘기기' :
    pass
    
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
  from crud.minibill_crud import get_deck,set_field,shuffle_deck, init_players
  room.turn = 0
  room.game_status = 'dice'

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