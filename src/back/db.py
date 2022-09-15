from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker
import os

db_user = os.getenv("DB_USER", "drill")
db_pass = os.getenv("DB_PASS", "drill")
db_host = os.getenv("DB_HOST", "localhost")
db_port = os.getenv("DB_PORT", "5432")

SQLALCHEMY_DATABASE_URL = f"postgresql://{db_user}:{db_pass}@{db_host}:{db_port}/drill"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
)


SessionLocal = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))

Base = declarative_base()
