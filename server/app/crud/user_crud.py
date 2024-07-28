from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from database import get_db
from sqlalchemy.orm import Session
from sqlalchemy import select
from schemas import UserCreate
from models import User
from passlib.context import CryptContext
from datetime import datetime, timedelta
from typing import Optional
from jose import jwt, JWTError
from os import environ

pwd_context = CryptContext(schemes=['bcrypt'])
oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')
SECRET_KEY = environ.get('SECRET_KEY', None) 
ALGORITHM = "HS256"

async def create_user(user_create:UserCreate, db:Session):
  user = User(
    username=user_create.username,
    password=pwd_context.has(user_create.password),
  )
  db.add(user)
  return user

async def get_user(db:Session, username: str) :
  result = await db.execute(select(User).filter(User.username == username))
  return result

def verify_password(plain_password, hashed_password) :
  return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password) :
  return pwd_context.hash(password)

async def authenticate_user(db:Session, username: str, password: str) :
  user = await get_user(db, username=username)
  
  if not user :
    return False
  if not verify_password(password, user.password) :
    return False
  return user

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) :
  to_encode = data.copy()
  
  if expires_delta :
    expire = datetime.utcnow() + expires_delta
  else :
    expire = datetime.utcnow() + timedelta(minutes=60)
    
  to_encode['exp'] = expire
  
  encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithms=[ALGORITHM])
  return encoded_jwt

async def get_current_user(db:Session=Depends(get_db), token:str=Depends(oauth2_scheme)):
  credential_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="inactive user",
    headers={'WWW-Authenticate': "Bearer"}
  )
  
  try :
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    username: str = payload.get('sub')

    if username is None :
      raise credential_exception
    
  except JWTError :
    raise credential_exception
  
  user = await get_user(db, username)

  if user is None :
    raise credential_exception
  
  return user

async def get_current_active_user(current_user: User =Depends(get_current_user)):
  return current_user
  