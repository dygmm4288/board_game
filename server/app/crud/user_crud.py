from fastapi import Depends, HTTPException, status, Request, Response
from fastapi.security import OAuth2PasswordBearer
from database import get_db
from sqlalchemy.orm import Session
from schemas import UserCreate
from models import User
from passlib.context import CryptContext
from datetime import datetime, timedelta
from typing import Optional
from jose import jwt, JWTError,ExpiredSignatureError
import os
from dotenv import load_dotenv
import logging
from utils import debug
logging.basicConfig(level=logging.ERROR, filename='app.log')

load_dotenv(os.path.join(os.path.dirname(__file__), '../../portal.env'))

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/api/auth/login')
SECRET_KEY = os.getenv('SECRET_KEY')
ALGORITHM = "HS256"

def create_user(user_create:UserCreate, db:Session):
  user = User(
    username=user_create.username,
    password=pwd_context.hash(user_create.password),
  )
  db.add(user)
  return user

def get_user(db:Session, username: str) :
  result = db.query(User).filter(User.username == username).first()
  return result

def verify_password(plain_password, hashed_password) :
  return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password) :
  return pwd_context.hash(password)

def authenticate_user(db:Session, username: str, password: str) :
  user = get_user(db, username=username)
  
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

  encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
  return encoded_jwt

def get_current_user(request: Request, response:Response, db:Session=Depends(get_db)):
  credential_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="inactive user",
    headers={'WWW-Authenticate': "Bearer"}
  )
  token = request.cookies.get('access_token')
  if not token :
    raise credential_exception

  try :
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    username: str = payload.get('username')
    if username is None :
      raise credential_exception
  except ExpiredSignatureError:
        logging.error("Token has expired")
        response.delete_cookie('access_token',domain='http://localhost:5173',path="/") 
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Expired token"
        ) 
  except JWTError as e :
    logging.error(f"JWTError: {e}")
    raise credential_exception
  
  user = get_user(db, username)

  if user is None :
    raise credential_exception
  
  return user

def get_current_active_user(current_user: User =Depends(get_current_user)):
  return current_user
  