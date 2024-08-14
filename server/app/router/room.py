from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from crud.room_crud import create_room, get_room, get_rooms, put_room
from database import get_db
from models import User
from crud.user_crud import get_current_user

router = APIRouter(prefix='/api/room')

@router.get('/')
def rest_get_rooms(db: Session = Depends(get_db), _user:User=Depends(get_current_user)) :
  rooms = get_rooms(db=db)

  print('-'*60)
  print(f'rooms is : {rooms}')
  print('-'*60)
  if not rooms :
    return []

  return rooms 


@router.get('/{r_id}')
def rest_get_room(r_id: str, db:Session=Depends(get_db), _user:User=Depends(get_current_user)):
  if not r_id :
    raise HTTPException(
      status_code=status.HTTP_404_NOT_FOUND,
      detail="잘못된 접근입니다"
    )

  room = get_room(r_id=r_id, db=db)

  if not room :
    raise HTTPException(
      status_code=status.HTTP_404_NOT_FOUND,
      detail="잘못된 접근입니다"
    )

  return room
  

@router.post('/')
def rest_post_room(max_players:int=None, db:Session=Depends(get_db), _user:User=Depends(get_current_user)) :
  if not max_players :
    max_players = 4
  room = create_room(max_players=max_players, db=db)

  db.commit()
  print('-'*60)
  print(f'room id : {room.id}/ room name: {room.name}/ room status: {room.status}/ room max_players: {room.max_players}')
  print('-'*60)
  return room

@router.put('/{r_id}')
def rest_put_room(r_id:str = None,confirm:str = None, db:Session=Depends(get_db), _user:User=Depends(get_current_user)):
  if not confirm or not r_id: 
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
  
  room = put_room(confirm=confirm,_room=_room, db=db)
  
  db.commit()
  
  return room