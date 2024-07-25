from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine

SQLALCHEMY_DATABASE_URL = 'sqlite+aiosqlite:///./myapi.db'

engine = create_async_engine(SQLALCHEMY_DATABASE_URL, echo=True)

AsyncSessionLocal = sessionmaker(
  bind=engine,
  class_=AsyncSession,
  expire_on_commit=False
)

Base = declarative_base()

async def get_db() :
  async with AsyncSessionLocal() as db :
    try :
      yield db
    finally:
      await db.close()  