from src.back.db import Base
from sqlalchemy import Column, String, Integer
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy_utils.types import ChoiceType
import uuid
import enum


class CompanyType(enum.Enum):
    CONTRACTOR = 0
    CLIENT = 1
    

class Company(Base):
    __tablename__ = 'company'
    __table_args__ = (
        {'comment': 'Таблица компаний'}
    )
    
    id = Column(UUID(as_uuid=True), primary_key=True, comment="Идентификатор компании", default=uuid.uuid4)
    name = Column(String, comment='Название компании')
    type = Column(
        ChoiceType(
            CompanyType, impl=Integer(),
        ),
        comment='Тип компании',
        nullable=False
    )

    
