import uuid

from sqlalchemy.orm import Session
from src.back.tables.chat import Room


def create_chat_room(db: Session, name: str):
    """
    Создает комнату чата в БД

    :param db: объект БД
    :param name: название комнаты чата
    """

    room = Room(name=name)
    db.add(room)
    db.commit()
    db.refresh(room)

    return room


def get_chat_rooms(db: Session, name: str = None):
    """
    Получает все комнаты чата из БД

    :param db: объект БД
    :param name: имя чата
    """

    query = db.query(Room)

    if name is not None:
        query = query.filter(Room.name == name)

    return query.all()


def get_chat_room_by_id(db: Session, room_id: uuid.UUID):
    """
    Возвращает комнату чата по идентификатору

    :param db: объект БД
    :param room_id: идентификатор комнаты
    """

    query = db.query(Room).filter(Room.id == room_id)
    return query.first()


def delete_chat_room(db: Session, room: Room):
    """
    Удаляет комнату чата по идентификатору

    :param db: объект БД
    :param room: объект комнаты чата
    """

    db.delete(room)
    db.commit()


def update_chat_room(db: Session, room: Room, new_name: str):
    """
    Обновляет название комнаты чата

    :param db: объект БД
    :param room: объект комнаты чата
    :param new_name: новое название чата
    """

    room.name = new_name
    db.add(room)
    db.commit()
    db.refresh(room)

    return room
