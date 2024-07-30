from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from models import Room
import uuid

def create_room(max_players:int, db:Session) :
  room = Room(
    name=uuid.uuid4(),
    status="waiting",
    max_players=max_players
  )

  db.add(room)

  return room

def put_room(confirm:str, _room:Room, db:Session) :
  
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
    
  return _room
    

def get_room(r_id:int, db:Session) :
  result = db.query(Room).filter(Room.id == r_id).first()
  return result
  
def get_rooms(db:Session) :
  result = db.query(Room).filter(Room.status != 'waiting').all()
  return result