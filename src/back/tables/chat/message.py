import uuid

from sqlalchemy.orm import relationship

from src.back.db import Base
from sqlalchemy import Column, ForeignKey, String, DateTime, Integer
from sqlalchemy.dialects.postgresql import UUID
import datetime


class Message(Base):
    __tablename__ = "chat_message"
    __table_args = ({"comment": "Сообщения чата"},)

    id = Column(UUID(as_uuid=True), primary_key=True, comment="Идентификатор записи", default=uuid.uuid4)
    room_id = Column(UUID(as_uuid=True), ForeignKey("chat_room.id"), comment="Идентификатор комнаты чата")
    user_id = Column(Integer, ForeignKey("user.id"), comment="Идентификатор пользователя")
    message = Column(String, nullable=False)
    created_at = Column(DateTime, comment="Время создания записи", default=datetime.datetime.utcnow)

    room = relationship("Room", back_populates="messages")
