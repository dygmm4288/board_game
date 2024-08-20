from typing import List, Callable

class Establishment:
    def __init__(self, id: int, name: str, description: str, cost: int, earn: int, rolls: List[int], color: str, initial: int, est_type: str):
        self.id = id
        self.name = name
        self.description = description
        self.cost = cost
        self.earn = earn
        self.rolls = rolls
        self.color = color
        self.initial = initial
        self.est_type = est_type
    def __mul__(self, multiplier):
        if isinstance(multiplier, int) and multiplier > 0:
            return [Establishment(self.id, self.name, self.description, self.cost, self.earn, self.rolls, self.color, self.initial, self.est_type) for _ in range(multiplier)]
        else:
            return NotImplemented

class LandMark:
    def __init__(self, id: int, name: str, description: str, coins: int, cost: List[int], activate: Callable = None):
        self.id = id
        self.name = name
        self.description = description
        self.coins = coins
        self.cost = cost
        self.activate = activate
    def __mul__(self, multiplier):
        if isinstance(multiplier, int) and multiplier > 0:
            return [LandMark(self.id, self.name, self.description, self.coins, self.cost, self.activate) for _ in range(multiplier)]
        else:
            return NotImplemented

class PlayerInfo:
    def __init__(self, id: int, coins: int, cards: List[int]):
        self.id = id
        self.coins = coins
        self.cards = cards

    def to_dict(self):
        return {
            "id": self.id,
            "coins": self.coins,
            "cards": self.cards
        }

