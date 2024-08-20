from typing import List

class Establishment() :
  id: int = None
  name: str = None
  description: str = None
  cost: int = None
  earn: int = None
  rolls: List[int] = None
  color: str = None
  type: str = None
  initial:int = None

class LandMark() :
  id:int = None
  name: str = None
  description: str = None
  coins: int = None
  cost: List[int] = None
  activate: function = None

class PlayerInfo() :
  id:int = None
  coin:int = None
  cards: List[int] = None