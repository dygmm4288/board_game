from sqlalchemy.orm import Session
from http_exceptions import raise_http_exception
from models import Room as SQLRoom
from schemas import Room,User
from datetime import datetime
from utils import debug
from typing import Dict

def create_room(
    max_players: int,
    game_name: str,
    db: Session) -> SQLRoom:
    now = datetime.now()

    room = SQLRoom(
        status='waiting',
        max_players=max_players,
        created_at=now,
        game_name=game_name,
    )
    
    db.add(room)

    return room
  

def put_room(confirm:str, _room:Room, user: User, updates: Dict, db:Session) :
  
  if confirm == '게임시작' :
    
    if _room.status != 'waiting' :
      raise_http_exception()

    _room.status = 'in-progress'

  elif confirm == '게임종료' :
    
    if _room.status != 'in-progress' :
      raise_http_exception()

    _room.status = 'waiting'
  
  elif confirm == '참여' :

    if _room.status != 'waiting' :
      raise_http_exception()

    if user in _room.players :
      raise_http_exception()
    
    _room.players.append(user)
    
  return _room
    

def get_room(r_id:int, db:Session) :
  result = db.query(SQLRoom).filter(SQLRoom.id == r_id).first()
  return result
  
def get_rooms(db:Session) :
  result = db.query(SQLRoom).filter(SQLRoom.status == 'waiting').all()
  return result