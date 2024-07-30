from pydantic import BaseModel, field_validator
from pydantic_core.core_schema import FieldValidationInfo

class User(BaseModel) :
  username: str
  password: str

class UserCreate(BaseModel) :
  username: str
  password: str
  password_confirm : str

  @field_validator('username', 'password', 'password_confirm')
  def not_empty(cls, v) :
    if not v or not v.strip() :
      raise ValueError('빈 값은 허용되지 않습니다.')
    return v
  
  @field_validator('password_confirm')
  def password_match(cls, v, info: FieldValidationInfo) :
    if 'password_confirm' in info.data and v != info.data['password'] :
      raise ValueError('비밀번호가 일치하지 않습니다.')
    return v
  
class Token(BaseModel) :
  access_token : str
  token_type: str
  username: str

class Room(BaseModel) :
  name: str
  status: str
  max_players: int

  @field_validator('max_players')
  def validate_max_players(cls, v) :
    if v <= 0 :
      raise ValueError('최대 플레이어 수는 1 이상이어야 합니다.')
    return v
