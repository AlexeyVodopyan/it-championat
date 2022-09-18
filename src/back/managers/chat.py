from fastapi import WebSocket
from typing import List


class ConnectionManager:
    """
    Класс для управления соединениями чата
    """

    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        """
        Создает новое соединение

        :param websocket: объект веб-сокета
        """

        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        """
        Удаляет заданное соединение

        :param websocket: объект веб-сокета
        """

        self.active_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        """
        Отправляет системное сообщение текущему пользователю

        :param message: сообщение
        :param websocket: объект веб-сокета
        """

        await websocket.send_text(message)

    async def broadcast(self, message: str):
        """
        Отправляет сообщение участникам чата

        :param message: сообщение
        """

        for connection in self.active_connections:
            await connection.send_text(message)
