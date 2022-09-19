from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from src.back.queries import user as user_queries

from src.back.schemas import TokenSchema, LoginSchema
from src.back.core.security import verify_password, create_access_token
from src.back.dependencies import get_db


router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("", response_model=TokenSchema)
async def login(login: LoginSchema, db: Session = Depends(get_db)):
    user = user_queries.get_by_email(db=db, email=login.email)

    if user is None or not verify_password(login.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Некорректное имя пользователя или пароль",
        )

    return TokenSchema(
        access_token=create_access_token({"sub": user.email}), token_type="Bearer"
    )
