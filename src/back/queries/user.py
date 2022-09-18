from src.back.tables.users import User
from src.back.schemas import UserInSchema
from typing import List, Optional
from sqlalchemy.orm import Session
from src.back.core.security import hash_password


def get_all(db: Session, limit: int = 100, skip: int = 0) -> List[User]:
    query = db.query(User).limit(limit).offset(skip)
    return query.all()


def get_by_id(db: Session, id: int) -> Optional[User]:
    query = db.query(User).filter(User.id == id).limit(1)
    return query.first()


def create(db: Session, user_schema: UserInSchema) -> User:
    user = User(
        name=user_schema.name,
        email=user_schema.email,
        hashed_password=hash_password(user_schema.password),
        company_name=user_schema.company_name
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def update(db: Session, user: User) -> User:
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def get_by_email(db: Session, email: str) -> User:
    query = db.query(User).filter(User.email == email).limit(1)
    return query.first()
