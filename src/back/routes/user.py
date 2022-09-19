from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from src.back.schemas import UserSchema, UserInSchema, UserUpdateSchema
from src.back.dependencies import get_db, get_current_user
from sqlalchemy.orm import Session
from src.back.queries import user as user_queries
from src.back.tables.users import User


router = APIRouter(prefix="/users", tags=["users"])


@router.get("", response_model=List[UserSchema])
async def read_users(db: Session = Depends(get_db), limit: int = 100, skip: int = 0):
    return user_queries.get_all(db=db, limit=limit, skip=skip)


@router.post("", response_model=UserSchema)
async def create_user(user: UserInSchema, db: Session = Depends(get_db)):
    user = user_queries.create(db=db, user_schema=user)
    return UserSchema.from_orm(user)


@router.put("", response_model=UserSchema)
async def update_user(
    id: int,
    user: UserUpdateSchema,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    old_user = user_queries.get_by_id(db=db, id=id)

    if old_user is None or old_user.email != current_user.email:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Пользователь не найден"
        )

    old_user.name = user.name if user.name is not None else old_user.name
    old_user.email = user.email if user.email is not None else old_user.email
    old_user.company_name = (
        user.company_name if user.company_name is not None else old_user.company_name
    )

    new_user = user_queries.update(db=db, user=old_user)

    return UserSchema.from_orm(new_user)
