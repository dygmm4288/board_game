from sqlalchemy.orm import Session
from fastapi import HTTPException, status
import uuid
from models import Room as SQLRoom
from schemas import RoomCreate, Room 

# def create_room(max_players:int, gameName:str, name:str, db:Session) :
#   room = Room(
#     name=str(uuid.uuid4()),
#     game_name=gameName,
#     created_by=name,
#     status="waiting",
#     max_players=max_players
#   )

#   db.add(room)
#   db.commit() #데이터베이스에 변경사항 저장
#   db.refresh(room) #새로 생성된 room의 정보를 갱신 (예:room.id)
#   print(f"Room stored in DB: {room.__dict__}")  # 저장된 데이터 확인
#   return room

def create_room(room_data: RoomCreate, db: Session) -> SQLRoom:
    room = SQLRoom(**room_data.dict())

    db.add(room)
    db.commit()  # 데이터베이스에 변경사항 저장
    db.refresh(room)  # 새로 생성된 room의 정보를 갱신 (예: room.id)
    print(f"Room stored in DB: {room.__dict__}")  # 저장된 데이터 확인
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
  result = db.query(SQLRoom).filter(SQLRoom.status == 'waiting').all()
  return result