from sqlalchemy.ext.asyncio import AsyncSession
from schemas import UserCreate, User
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=['bcrypt'])

def create_user(user_create:UserCreate, db:AsyncSession):
  user = User(
    username=user_create.username,
    password=pwd_context.has(user_create.password),
  )
  db.add(user)
  return user