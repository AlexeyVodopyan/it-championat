import enum
import uuid

from sqlalchemy import Column, Integer
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy_utils.types import ChoiceType

from src.back.db import Base


class WellDrillingStatus(enum.Enum):
    NOT_STARTED = 0
    DRILLING = 1
    FINISHED = 2


class Well(Base):
    __tablename__ = "well"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        comment="Идентификатор скважины",
        default=uuid.uuid4,
    )
    status = Column(
        ChoiceType(choices=WellDrillingStatus, impl=Integer()),
        comment="Статус строительства скважины",
    )
    telemetry = relationship("Telemetry", back_populates="well", uselist=True)
    equipment = relationship("Equipment", back_populates="well", uselist=True)
