from sqlalchemy import Column, ForeignKey, String
from sqlalchemy.dialects.postgresql import DATE, INTEGER, UUID
from sqlalchemy.orm import relationship

from src.back.db import Base


class EquipmentSchedule(Base):
    __tablename__ = "equipment_schedule"
    __table_args = ({"comment": "Таблица истории работы оборудования"},)

    id = Column(UUID(as_uuid=True), primary_key=True, comment="Идентификатор записи")
    work_started = Column(DATE, comment="Дата начала работ")
    work_finished = Column(DATE, comment="Дата конца работ")
    equipment = relationship("Equipment", cascade="all, delete", uselist=False)

    equipment_id = Column(
        UUID(as_uuid=True), ForeignKey("equipment.id", ondelete="CASCADE")
    )


class Equipment(Base):
    __tablename__ = "equipment"
    __table_args__ = ({"comment": "Таблица оборудования"},)
    id = Column(
        UUID(as_uuid=True), primary_key=True, comment="Идентификатор оборудования"
    )
    name = Column(String, comment="Название оборудования")

    lifetime = Column(INTEGER, comment="Срок службы оборудования")
    user_note = Column(String, comment="Заметки пользователя")

    well = relationship("Well", cascade="all, delete", uselist=False)
    company = relationship("Company", cascade="all, delete", uselist=False)

    owner_id = Column(UUID(as_uuid=True), ForeignKey("company.id", ondelete="CASCADE"))
    well_id = Column(UUID(as_uuid=True), ForeignKey("well.id", ondelete="CASCADE"))
