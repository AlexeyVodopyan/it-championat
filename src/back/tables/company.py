import enum
import uuid

from sqlalchemy import Column, Integer, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy_utils.types import ChoiceType

from src.back.db import Base


class CompanyType(enum.Enum):
    CONTRACTOR = 0
    CLIENT = 1


class Company(Base):
    __tablename__ = "company"
    __table_args__ = {"comment": "Таблица компаний"}

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        comment="Идентификатор компании",
        default=uuid.uuid4,
    )
    name = Column(String, comment="Название компании")
    equipment = relationship("Equipment", back_populates="company", uselist=True)

    type = Column(
        ChoiceType(
            CompanyType,
            impl=Integer(),
        ),
        comment="Тип компании",
        nullable=False,
    )
