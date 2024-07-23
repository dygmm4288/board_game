from fastapi import FastAPI
from dotenv import load_dotenv
from router import auth

app = FastAPI()

app.include_router(auth.router)

if __name__ == '__main__' :
  import uvicorn
  load_dotenv('../portal.env')
  uvicorn.run(app, host="127.0.0.1", port=8080, log_level='debug')