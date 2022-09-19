import uuid

from fastapi import WebSocket, WebSocketDisconnect, APIRouter, Query, Depends
from sqlalchemy.orm import Session
from src.back.queries import chat

from src.back.managers import chat as chat_manager
from src.back.dependencies import get_db, get_current_user
from src.back.schemas import MessagesSchema, RoomsSchema, RoomSchema
from src.back.schemas.chat import MessageSchema

router = APIRouter(prefix="/chat", tags=["chat"])
manager = chat_manager.ConnectionManager()


@router.get("/rooms", response_model=RoomsSchema)
def get_all_rooms(db: Session = Depends(get_db)):
    rooms = chat.get_chat_rooms(db)
    rooms = RoomsSchema(chat_rooms=rooms)

    return rooms


@router.post("/rooms", response_model=RoomSchema)
def create_room(name: str, db: Session = Depends(get_db)):
    room = chat.create_chat_room(db=db, name=name)
    return RoomSchema.from_orm(room)


@router.delete("/room/{room_id}")
def delete_room(room_id: uuid.UUID, db: Session = Depends(get_db)):
    room = chat.get_chat_room_by_id(db=db, room_id=room_id)
    chat.delete_chat_room(db=db, room=room)


@router.put("/room", response_model=RoomSchema)
def update_room(room: RoomSchema, db: Session = Depends(get_db)):
    new_name = room.name
    old_room = chat.get_chat_room_by_id(db=db, room_id=room.id)
    new_room = chat.update_chat_room(db=db, room=old_room, new_name=new_name)
    return RoomSchema.from_orm(new_room)


@router.websocket("/ws/{room_id}")
async def websocket_endpoint(
    websocket: WebSocket,
    room_id: uuid.UUID,
    token: str = Query(...),
    db: Session = Depends(get_db),
):

    # авторизация пользователя
    user = await get_current_user(db=db, token=token)

    await manager.connect(websocket)

    # получим старые сообщения
    messages = chat.get_messages(db=db, room_id=room_id)
    messages = MessagesSchema(messages=messages)

    if messages.messages:
        try:
            await manager.send_personal_message(
                messages.json(ensure_ascii=False), websocket
            )
        except WebSocketDisconnect:
            manager.disconnect(websocket)

    try:
        while True:
            data = await websocket.receive_text()
            saved = chat.save_message(
                db=db, message=data, room_id=room_id, user_id=user.id
            )
            msg = MessageSchema(
                name=user.name,
                company_name=user.company_name,
                message=data,
                created_at=saved.created_at,
            )

            await manager.broadcast(msg.json(ensure_ascii=False))
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.broadcast(f"User #{user.name} left the chat")
