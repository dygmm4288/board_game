from fastapi import FastAPI
from typing import List

app = FastAPI()

if __name__ == '__main__' :
  import uvicorn
  uvicorn.run(app, host="127.0.0.1", port=8080, log_level='debug')