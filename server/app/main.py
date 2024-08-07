from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from router import auth, room
import os

load_dotenv(os.path.join(os.path.dirname(__file__), '../portal.env'))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 모든 도메인 허용, 특정 도메인만 허용하려면 ["http://example.com"] 형식으로 변경
    allow_credentials=True,
    allow_methods=["*"],  # 모든 HTTP 메서드 허용
    allow_headers=["*"],  # 모든 HTTP 헤더 허용
)

app.include_router(auth.router)
app.include_router(room.router)



if __name__ == '__main__' :
  import uvicorn
  
  uvicorn.run(app, host="127.0.0.1", port=8000, log_level='debug')