from sqlalchemy.orm import Session
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

def put_room(confirm:str, db:Session) :

  pass

def get_room(r_id:int, db:Session) :
  result = db.query(Room).filter(Room.id == r_id).first()
  return result
  
def get_rooms(db:Session) :
  result = db.query(Room).filter(Room.status != 'waiting').all()
  return result