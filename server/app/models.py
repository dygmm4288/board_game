from sqlalchemy import Column, String, Integer, ForeignKey, DateTime
from sqlalchemy.orm import relationship 
from database import Base

class User(Base) :
  __tablename__ = 'users'

  id = Column(Integer, primary_key=True, index=True)  
  username = Column(String, nullable=False, unique=True)
  password = Column(String, nullable=False)
  
  room_id = Column(String, ForeignKey('rooms.id'))
  room = relationship('Room', back_populates='players')

class Room(Base):
  __tablename__ = 'rooms'

  id = Column(Integer, primary_key=True, nullable=False, unique=True)
  status = Column(String, nullable=False, default="대기중")
  max_players = Column(Integer, nullable=False, default=4)
  created_at = Column(DateTime, nullable=False)

  game_name = Column(String, nullable=False)
  game_json = Column(String, nullable=True)
  game_status = Column(String, nullable=True)
  turn = Column(Integer, nullable=False, default=0)

  players = relationship('User', back_populates='room')