from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from models import Room as SQLRoom
from schemas import Room,User
from datetime import datetime
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
      raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="잘못된 접근입니다"
      )
    
    _room.status = 'in-progress'

  elif confirm == '게임종료' :
    
    if _room.status != 'in-progress' :
      raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="잘못된 접근입니다"
      )

    _room.status = 'waiting'
  
  elif confirm == '참여' :

    if _room.status != 'waiting' :
      raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="잘못된 접근입니다"
      )
   
   # TODO : 기존에 존재하는 유저인지 확인해야함
    # _user = _room.players
    
    _room.players.append(user)
    
  return _room
    

def get_room(r_id:int, db:Session) :
  result = db.query(SQLRoom).filter(SQLRoom.id == r_id).first()
  return result
  
def get_rooms(db:Session) :
  result = db.query(SQLRoom).filter(SQLRoom.status == 'waiting').all()
  return result