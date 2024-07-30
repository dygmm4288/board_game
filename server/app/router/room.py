from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db


router = APIRouter(prefix='/api/room')

@router.get('/')
def get_rooms(db: Session = Depends(get_db)) :
  pass

@router.get('/{r_id}')
def get_room(r_id: str, db:Session=Depends(get_db)):
  pass


@router.post('/')
def post_room(db:Session=Depends(get_db)) :
  pass

@router.put('/')
def put_room(db:Session=Depends(get_db)):
  pass