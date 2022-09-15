from src.back.db import Base
from sqlalchemy import Column, String, Integer, DateTime
import datetime


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, autoincrement=True, comment="Идентификатор записи", unique=True)
    email = Column(String, comment="Email адрес", unique=True)
    name = Column(String, comment="Имя пользователя")
    hashed_password = Column(String, comment="Зашифрованный пароль")
    company_name = Column(String, comment="Название компании")
    created_at = Column(DateTime, comment="Время создания записи", default=datetime.datetime.utcnow)
