import uuid

from sqlalchemy.orm import relationship

from src.back.db import Base
from sqlalchemy import Column, String
from sqlalchemy.dialects.postgresql import UUID


class Room(Base):
    __tablename__ = "chat_room"
    __table_args = ({"comment": "Таблица комнат чата"},)

    id = Column(UUID(as_uuid=True), primary_key=True, comment="Идентификатор записи", default=uuid.uuid4)
    name = Column(String(length=60), nullable=False)

    messages = relationship("Message", back_populates="room", cascade="all, delete, delete-orphan")
