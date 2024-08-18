from sqlalchemy import Column, String, Integer, ForeignKey
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

  room_num = Column(Integer, index=True, nullable=True)
  id = Column(String, primary_key=True, nullable=False, unique=True)
  status = Column(String, nullable=False, default="대기중")
  max_players = Column(Integer, nullable=False, default=4)
  game_name = Column(String)
  created_by = Column(String)
  

  users = relationship('User', back_populates='room')