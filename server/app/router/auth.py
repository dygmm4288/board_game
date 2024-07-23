from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from os import environ
from schemas import UserCreate
from user_crud import create_user
from database import get_db

ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24
SECRET_KEY = environ.get('SECRET_KEY', None) 
ALGORITHM = "HS256"

router = APIRouter(prefix='/api/auth')

@router.post('/')
async def login() :
  pass

@router.post('/regist')
async def regist_user(_user_create: UserCreate, db:AsyncSession=Depends(get_db)) :
  create_user(db=db, user_create=_user_create)
  await db.commit()
