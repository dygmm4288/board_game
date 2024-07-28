from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

SQLALCHEMY_DATABASE_URL = 'sqlite+aiosqlite:///./myapi.db'

engine = create_engine(SQLALCHEMY_DATABASE_URL, echo=True)

SessionLocal = sessionmaker(
  bind=engine,
  autoflush=False,
  autocommit=False
)

Base = declarative_base()

def get_db() :
  with SessionLocal() as db :
    try :
      yield db
    finally:
      db.close()  