import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, validator, constr


class UserSchema(BaseModel):
    id: Optional[str] = None
    name: str
    email: EmailStr
    hashed_password: str
    company_name: str
    created_at: datetime.datetime

    class Config:
        orm_mode = True


class UserUpdateSchema(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    company_name: Optional[bool] = None


class UserInSchema(BaseModel):
    name: str
    email: EmailStr
    password: constr(min_length=8)
    password2: str
    company_name: str

    @validator("password2")
    def password_match(cls, v, values, **kwargs):
        if 'password' in values and v != values["password"]:
            raise ValueError("Пароли не совпадают!")
        return True
