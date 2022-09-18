from pydantic import BaseModel, Field
import uuid
from typing import Optional, List


class RoomSchema(BaseModel):
    id: uuid.UUID
    name: str

    class Config:
        orm_mode = True


class RoomsSchema(BaseModel):
    chat_rooms: Optional[List[RoomSchema]] = Field(title="Комнаты чатов")

    class Config:
        orm_mode = True
