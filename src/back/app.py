import uvicorn
from fastapi import FastAPI
from src.back.routes import user_router, chat_router, auth_router
from fastapi.middleware.cors import CORSMiddleware

origins = ["http://localhost:3000","http://localhost:3002"]

app = FastAPI(
    title="IT Camp Тестовое Приложение",
    description="Обучающее приложение по созданию простых API",
    license_info={
        "name": "The Unlicense",
        "url": "https://unlicense.org",
    },
)

app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"])


@app.get('/')
def hello_world():
    return 'Hello, world!'


# app.include_router(rts.main_router)
app.include_router(user_router)
app.include_router(chat_router)
app.include_router(auth_router)

if __name__ == "__main__":
    uvicorn.run(app, port=8001)
