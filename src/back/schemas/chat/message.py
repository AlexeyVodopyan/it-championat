import datetime
from typing import List, Optional

from pydantic import BaseModel, Field


class MessageSchema(BaseModel):
    name: str = Field(title="Имя пользователя")
    company_name: str = Field(title="Название компании")
    message: str = Field(title="Сообщение")
    created_at: datetime.datetime = Field(title="Дата создания сообщения")


class MessagesSchema(BaseModel):
    messages: Optional[List[MessageSchema]] = None

    class Config:
        orm_mode = True
