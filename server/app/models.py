from sqlalchemy import Column, String, Integer, ForeignKey, DateTime
from sqlalchemy.orm import relationship 
from database import Base

class User(Base) :
  __tablename__ = 'users'

  id = Column(Integer, primary_key=True, index=True)  
  username = Column(String, nullable=False, unique=True)
  password = Column(String, nullable=False)
  
  room_id = Column(String, ForeignKey('rooms.id'))
  room = relationship('Room', back_populates='users')

class Room(Base):
  __tablename__ = 'rooms'

  id = Column(Integer, primary_key=True, nullable=False, unique=True)
  status = Column(String, nullable=False, default="대기중")
  max_players = Column(Integer, nullable=False, default=4)
  created_at = Column(DateTime, nullable=False)
  game = Column(String, nullable=False)

  players = relationship('User', back_populates='room')

class Game(Base) :
  __tablename__ = 'games'
  
  id = Column(Integer, primary_key=True, nullable=False, unique=True)
  name = Column(String, nullable=False)
  turn = Column(Integer, nullable=False, default=0) 
  game_type = Column(String) # 게임 종류 

