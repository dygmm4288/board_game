from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from os import environ
from schemas import UserCreate, Token
from server.app.crud.user_crud import create_user, get_user
from database import get_db
from crud.user_crud import authenticate_user,create_access_token
from datetime import timedelta

ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24
SECRET_KEY = environ.get('SECRET_KEY', None) 
ALGORITHM = "HS256"

router = APIRouter(prefix='/api/auth')

@router.post('/login')
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)) :
  user = get_user(db, form_data.username)
  pass

@router.post('/regist')
async def regist_user(_user_create: UserCreate, db:AsyncSession=Depends(get_db)) :
  create_user(db=db, user_create=_user_create)
  await db.commit()

@router.post('/token', response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)) :
  user = await authenticate_user(db, form_data.username,form_data.password)
  if not user :
    raise HTTPException(
      status_code=status.HTTP_401_UNAUTHORIZED,
      detail="inactive user",
      header={'WWW-Authenticate':"Bearer"}
    )
  
  access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
  access_token = create_access_token(
    data={'sub':user.id}, expires_delta=access_token_expires
  )
  return {'access_token':access_token, 'token_type':'bearer'}