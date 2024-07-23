from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from schemas import UserCreate, User
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=['bcrypt'])

async def create_user(user_create:UserCreate, db:AsyncSession):
  user = User(
    username=user_create.username,
    password=pwd_context.has(user_create.password),
  )
  db.add(user)
  return user

async def get_user(db:AsyncSession, id: int) :
  return await db.get(User, id)
  