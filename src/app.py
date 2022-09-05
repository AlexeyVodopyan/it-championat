import uvicorn
from fastapi import FastAPI

app = FastAPI()


@app.get('/')
def hello_world():
    return 'Hello, world!'


# app.include_router(rts.main_router)

if __name__ == "__main__":
    uvicorn.run(app, port=8001)
