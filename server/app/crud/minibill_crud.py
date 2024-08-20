from schemas.minibill_metadata import establishments, landmarks
from schemas.minibill import Establishment, LandMark, PlayerInfo
from typing import List, Union
from random import randint

def get_deck(type:str) :
  deck = []
  dices = [1,2,3,4,5,6] if type == 'est16' else [7, 8, 9, 10, 11, 12]
  if type == 'landmark' :
    deck = landmarks.copy()
  else :
    for establishment in establishments :
      if any(dice in establishment.rolls for dice in dices) :
        deck.extend(establishment * establishment.initial)
  return deck

def shuffle_deck(deck:Union[List[LandMark], List[Establishment]]) :
  shuffled_deck = []
  rest_deck = deck.copy()
  
  for _ in range(len(shuffled_deck)) :
    length = len(rest_deck)
    pick = randint(0, length - 1)
    
    shuffled_deck.append(rest_deck.pop(pick))

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

    if card.id not in field :
      field[card.id] = 1

      if len(field) ==  MAX_SAME_CARD_ON_FIELD_COUNT:
        break

      continue

    field[card.id] += 1

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
      )
    )
  
  return player_infos