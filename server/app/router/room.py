from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from crud.room_crud import create_room, get_room, get_rooms, put_room
from database import get_db
from models import Room


router = APIRouter(prefix='/api/room')

@router.get('/')
def rest_get_rooms(db: Session = Depends(get_db)) :
  rooms = get_rooms(db=db)

  if not rooms :
    return []

  return rooms 


@router.get('/{r_id}')
def rest_get_room(r_id: str, db:Session=Depends(get_db)):
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
def rest_post_room(max_players:str=None, db:Session=Depends(get_db)) :
  if not max_players :
    max_players = 4
  room = create_room(max_players=max_players, db=db)

  db.commit()
 
  return room

@router.put('/{r_id}')
def rest_put_room(r_id:str = None,confirm:str = None, db:Session=Depends(get_db)):
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