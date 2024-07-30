from fastapi import FastAPI
from dotenv import load_dotenv
from router import auth, room
import os

load_dotenv(os.path.join(os.path.dirname(__file__), '../portal.env'))

print(os.getenv('SYNC_DATABASE_URL'), os.getenv('SECRET_KEY'))
app = FastAPI()

app.include_router(auth.router)
app.include_router(room.router)

if __name__ == '__main__' :
  import uvicorn
  
  uvicorn.run(app, host="127.0.0.1", port=8000, log_level='debug')