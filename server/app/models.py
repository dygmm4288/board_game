from sqlalchemy import Column, String
from .database import Base

class User(Base) :
  __tablename__ = 'users'
  
  username = Column(String, primary_key=True, index=True)
  password = Column(String, nullable=False)
