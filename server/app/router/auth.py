from fastapi import APIRouter, Depends, HTTPException, status, Response
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from sqlalchemy.orm import Session
from schemas import UserCreate, Token
from crud.user_crud import create_user, get_user
from database import get_db
from crud.user_crud import authenticate_user,create_access_token
from datetime import timedelta

ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24

router = APIRouter(prefix='/api/auth')

@router.post('/regist')
def regist_user(_user_create: UserCreate, db:Session=Depends(get_db)) :
  user = get_user(db,_user_create.username)
  if user :
      raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="이미 존재하는 사용자입니다.")
  create_user(db=db, user_create=_user_create)
  db.commit()

@router.post('/login', response_model=Token)
def login_for_access_token(response:Response, form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)) :
  user = authenticate_user(db, form_data.username,form_data.password)
  if not user :
    raise HTTPException(
      status_code=status.HTTP_401_UNAUTHORIZED,
      detail="inactive user",
      headers={'WWW-Authenticate':"Bearer"}
    )
  
  access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
  access_token = create_access_token(
    data={'sub':str(user.id),'username': user.username}, expires_delta=access_token_expires
  )

  response.set_cookie(key='access_token', value=access_token, httponly=True)

  return {
     'access_token':access_token,
     'token_type':'bearer',
     'username' : user.username
    }