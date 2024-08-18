from schemas import Game
from typing import List

class Establishment() :
  name: str = None
  description: str = None
  cost: int = None
  earn: int = None
  rolls: List[int] = None
  color: str = None
  type: str = None


class LandMarks() :
  name: str = None
  description: str = None
  coins: int = None
  cost: List[int] = None

class Minibill(Game) :
  state: str = None # dice, purchase

  # decks
  deck_16: List[Establishment] = None
  deck_712: List[Establishment] = None
  deck_landmarks: List[LandMarks] = None
  
  # field_cards
  field_16: List[Establishment] = None
  field_712: List[Establishment] = None
  field_landmarks: List[LandMarks] = None
