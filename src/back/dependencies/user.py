from fastapi import Depends, HTTPException, status
from src.back.core.security import JWTBearer, decode_access_token
from src.back.queries import user as user_queries
from sqlalchemy.orm import Session
from src.back.dependencies.db import get_db
from src.back.tables.users import User


async def get_current_user(db: Session = Depends(get_db), token: str = Depends(JWTBearer())) -> User:
    cred_exception = HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Credentials are not valid")
    payload = decode_access_token(token)
    if payload is None:
        raise cred_exception
    email: str = payload.get("sub")
    if email is None:
        raise cred_exception
    user = user_queries.get_by_email(db=db, email=email)
    if user is None:
        raise cred_exception
    return user
