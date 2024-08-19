from sqlalchemy.orm import Session
from http_exceptions import raise_http_exception
from models import Room as SQLRoom
from models import User as UserModel
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
  

def put_room(confirm:str, _room:Room, user: UserModel, updates: Dict, db:Session) :
  
  if confirm == '게임시작' :
    
    if _room.status != 'waiting' :
      raise_http_exception()

    _room.status = 'in-progress'

  elif confirm == '게임종료' :
    
    if _room.status != 'in-progress' :
      raise_http_exception()

    _room.status = 'waiting'
  
  elif confirm == '참여' :

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
  elif confirm == '게임초기화' :
    pass
  
  elif confirm == '주사위굴리기':
    pass
  
  elif confirm == '구매하기' :
    pass
  
  elif confirm == '다음턴넘기기' :
    pass
    
  return _room
    

def get_room(r_id:int, db:Session) :
  result = db.query(SQLRoom).filter(SQLRoom.id == r_id).first()
  return result
  
def get_rooms(db:Session) :
  result = db.query(SQLRoom).filter(SQLRoom.status == 'waiting').all()
  return result