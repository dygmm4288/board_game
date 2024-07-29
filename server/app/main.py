from fastapi import FastAPI
from dotenv import load_dotenv
from router import auth
import os

load_dotenv(os.path.join(os.path.dirname(__file__), '../portal.env'))

app = FastAPI()

app.include_router(auth.router)

if __name__ == '__main__' :
  import uvicorn
  
  uvicorn.run(app, host="127.0.0.1", port=8000, log_level='debug')