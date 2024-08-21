from schema.minibill_metadata import establishments,landmarks
from schema.minibill import Establishment, LandMark, PlayerInfo
from typing import List, Union, Tuple
from random import randint
from models import Room as RoomModel
import json

def get_deck(type:str) :
  deck = []
  dices = [1,2,3,4,5,6] if type == 'est16' else [7, 8, 9, 10, 11, 12]
  if type == 'landmark' :
    deck = list(map(lambda x: x.id, landmarks.copy()))
  else :
    for establishment in establishments :
      if any(dice in establishment.rolls for dice in dices) :
        deck.extend([establishment.id] * establishment.initial)
  return deck

def shuffle_deck(deck:Union[List[LandMark], List[Establishment]]) :
  shuffled_deck = []
  rest_deck = deck.copy()
  
  for _ in range(len(rest_deck)) :
    length = len(rest_deck)
    pick = randint(0, length - 1)
    card = rest_deck.pop(pick)
    shuffled_deck.append(card)

  return shuffled_deck
  

def draw_deck(deck:Union[List[LandMark], List[Establishment]]) :
  length = len(deck)

  if length == 0 : return None
  
  return deck.pop()

def set_field(field, deck:Union[List[LandMark], List[Establishment]]) :
  '''
    필드에 서로 다른 카드가 5개가 세팅 될 때 까지 덱에서 카드를 뽑는다
  '''
  MAX_SAME_CARD_ON_FIELD_COUNT = 5

  while True :
    card = draw_deck(deck)

    if not card :
      break

    if card not in field :
      field[card] = 1

      if len(field) ==  MAX_SAME_CARD_ON_FIELD_COUNT:
        break

      continue

    field[card] += 1

  return field

def init_players(players) :
  player_infos = []
  START_COIN = 5

  for player in players :
    player_infos.append(
      PlayerInfo(
        id=player.id,
        coins=START_COIN,
        cards=[],
      ).to_dict()
    )
  
  return player_infos

def get_game_status(room:RoomModel) :
  game_status = room.game_json
  if type(game_status) == str :
    game_status = json.loads(game_status)

  return game_status 

def roll_dice(game_json, turn: int, cnt: int = 1) -> Tuple(int, bool) :
  game_status = game_json

  if type(game_json) == str :
    game_status = json.loads(game_json)
  
  if is_purchase_turn(game_status, turn) : return (0, False)

  one = randint(1, 6)
  two = randint(1, 6)

  if cnt == 1 : return (one, False)

  return (one + two, one == two)

def is_purchase_turn(game_status, turn:int ) :
  PURCHASE_TURN = 3 # 각자의 턴이 3턴까지는 주사위를 던지지 않는다.

  len_players = len(game_status['players'])

  return int(turn / len_players) < PURCHASE_TURN

def get_current_player_index(room:RoomModel) :
  return room.turn % get_player_length(room)

def get_player_length(room:RoomModel) :
  return len(room.players)

def check_red_card(room:RoomModel, roll_player, cur_player, dice:int) :
  # roll_player가 RED CARD를 가지고 있다다
  game_status = get_game_status(room)
  
  players = game_status['players']
  return room

def check_blue_card(room:RoomModel, cur_player, dice) :
  return room

def check_green_card(room:RoomModel, roll_player, dice) :
  return room
  
def check_purple_card(room:RoomModel,roll_player, dice) :
  return room

def check_landmark_card(room:RoomModel) :
  # TODO : Landmark별 게임 처리
  return room