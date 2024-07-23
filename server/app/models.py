from sqlalchemy import Column, String, Integer
from .database import Base

class User(Base) :
  __tablename__ = 'users'

  id = Column(Integer, primary_key=True, index=True)  
  username = Column(String,nullable=False, index=True)
  password = Column(String, nullable=False)
