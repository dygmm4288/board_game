from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine

SQLALCHEMY_DATABASE_URL = 'sqlite:///./test.db'

engine = create_async_engine(SQLALCHEMY_DATABASE_URL, echo=True)

AsyncSessionLocal = sessionmaker(
  bind=engine,
  class_=AsyncSession,
  expire_on_commit=False
)

Base = declarative_base()

def get_db() :
  db = AsyncSessionLocal()
  try :
    yield db
  finally: 
    db.close()