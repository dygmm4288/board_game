from fastapi import status, HTTPException
def raise_http_exception(code: int = status.HTTP_400_BAD_REQUEST, detail: str="잘못된 접근입니다.") :
  raise HTTPException(
    status_code=code,
    detail=detail
  )