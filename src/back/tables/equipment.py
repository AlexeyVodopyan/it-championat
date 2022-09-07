import enum

from src.back.db import Base
from sqlalchemy import Column, String, ForeignKey, orm
from sqlalchemy.dialects.postgresql import UUID, INTEGER, DATE


class EquipmentSchedule(Base):
    __tablename__ = 'equipment_schedule'
    __table_args = (
        {'comment': 'Таблица истории работы оборудования'},
    )
    
    id = Column(UUID(as_uuid=True), primary_key=True, comment='Идентификатор записи')
    work_started = Column(DATE, comment='Дата начала работ')
    work_finished = Column(DATE, comment='Дата конца работ')
    
    equipment_id = Column(UUID(as_uuid=True), ForeignKey('equipment.id', ondelete='CASCADE'))


class Equipment(Base):
    __tablename__ = 'equipment'
    __table_args__ = (
        {'comment': "Таблица оборудования"},
    )
    id = Column(UUID(as_uuid=True), primary_key=True, comment='Идентификатор оборудования')
    name = Column(String, comment="Название оборудования")
    
    lifetime = Column(INTEGER, comment='Срок службы оборудования')
    user_note = Column(String, comment='Заметки пользователя')
    
    owner_id = Column(UUID(as_uuid=True), ForeignKey('company.id', ondelete='CASCADE'))
    well_id = Column(UUID(as_uuid=True), ForeignKey('well.id', ondelete='CASCADE'))