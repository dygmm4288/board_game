from fastapi import APIRouter, Depends, HTTPException, status
from typing import Dict
from sqlalchemy.orm import Session
from crud.room_crud import create_room, get_room, get_rooms, put_room
from database import get_db 
from models import User
from crud.user_crud import get_current_user
from schemas import RoomCreate
from http_exceptions import raise_http_exception
from utils import debug

router = APIRouter(prefix='/api/room')

@router.get('/')
def rest_get_rooms(db: Session = Depends(get_db), _user:User=Depends(get_current_user)):
    if _user and _user.room_id :
      raise_http_exception(status.HTTP_307_TEMPORARY_REDIRECT, {'msg': '이미 참여한 방이 존재합니다.', 'id': _user.room_id})
    rooms = get_rooms(db=db)
    return rooms

@router.get('/{r_id}')
def rest_get_room(r_id: str, db:Session=Depends(get_db), _user:User=Depends(get_current_user)):
  if not r_id :
    raise HTTPException(
      status_code=status.HTTP_404_NOT_FOUND,
      detail="잘못된 접근입니다"
    )
  if _user and _user.room_id != r_id :
     raise_http_exception()
  room = get_room(r_id=r_id, db=db)

  if not room :
    raise HTTPException(
      status_code=status.HTTP_404_NOT_FOUND,
      detail="잘못된 접근입니다"
    )

  return room

@router.post('/')    
def rest_post_room(
    request: RoomCreate = None,
    db: Session = Depends(get_db),
    _user: User = Depends(get_current_user)
) :

  room = create_room(
     max_players=request.max_players, 
     game_name=request.game_name,
     db=db)

  db.commit()
  db.refresh(room)  
  
  return room

@router.put('/{r_id}')
def rest_put_room(r_id:int , confirm:str , updates: Dict[str, str]=None , db:Session=Depends(get_db), _user:User=Depends(get_current_user)):
  if not confirm and not r_id :
    raise HTTPException(
      status_code=status.HTTP_400_BAD_REQUEST,
      detail="잘못된 접근입니다"
    )
  _room = get_room(r_id=r_id,db=db)

  if not _room :
    raise HTTPException(
      status_code=status.HTTP_404_NOT_FOUND,
      detail="잘못된 접근입니다"
    )
  
  room = put_room(confirm=confirm, _room=_room, updates=updates, user=_user, db=db)

  db.commit()
  if room : 
    db.refresh(room)  
  return room

@router.delete('/{r_id}')
def rest_delete_room(r_id: int, db: Session = Depends(get_db), _user: User = Depends(get_current_user)):
    if not r_id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="잘못된 접근입니다"
        )
    
    room = get_room(r_id=r_id, db=db)

    if not room:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="방을 찾을 수 없습니다"
        )

    db.delete(room)
    db.commit()

    return {"detail": "방이 삭제되었습니다."}
