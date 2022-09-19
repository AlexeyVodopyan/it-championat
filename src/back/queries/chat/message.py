import uuid


from sqlalchemy.orm import Session
from sqlalchemy import and_, desc
from src.back.tables.chat import Message
from src.back.tables.users import User


def get_messages(db: Session, room_id: uuid.UUID):
    """
    Получает сообщения из БД

    :param db: объект БД
    :param room_id: идентификатор комнаты
    """

    query = (
        db.query(User.name, User.company_name, Message.message, Message.created_at)
        .filter(and_(User.id == Message.user_id, Message.room_id == room_id))
        .order_by(desc(Message.created_at))
    )
    return query.all()


def save_message(db: Session, message: str, room_id: uuid.UUID, user_id: int):
    """
    Сохраняет сообщение в БД

    :param db: объект БД
    :param message: сообщение
    :param room_id: идентификатор комнаты
    :param user_id: идентификатор пользователя
    """

    msg = Message(room_id=room_id, user_id=user_id, message=message)
    db.add(msg)
    db.commit()
    db.refresh(msg)

    return msg
