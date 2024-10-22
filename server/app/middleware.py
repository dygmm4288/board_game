from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS 설정 추가
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # 허용할 도메인 (프론트엔드 도메인)
    allow_credentials=True,
    allow_methods=["*"],  # 허용할 HTTP 메서드 (GET, POST, DELETE, 등)
    allow_headers=["*"],  # 허용할 HTTP 헤더
)

# 여기에 나머지 라우터 및 엔드포인트 설정을 추가합니다.
