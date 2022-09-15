import uvicorn
from fastapi import FastAPI
from src.back.routes import user_router, chat_router, auth_router

app = FastAPI()


@app.get('/')
def hello_world():
    return 'Hello, world!'


# app.include_router(rts.main_router)
app.include_router(user_router)
app.include_router(chat_router)
app.include_router(auth_router)

if __name__ == "__main__":
    uvicorn.run(app, port=8001)
