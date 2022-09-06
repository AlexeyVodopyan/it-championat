import datetime
import enum
import uuid

from sqlalchemy import Column, Float, String, DateTime, Integer, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy_utils import ChoiceType
from src.back.db import Base


class ParamType(enum.Enum):
    HKLD = 1  # Вес на крюке (HookLoad), т"
    TRVL_BLOCK = 2  # "Тальблок, м"
    WEIGHT_BIT = 3  # "Нагрузка на долото, т"
    RTR_MOM = 4  # "Момент на роторе, кН*м"
    MECH_SPEED = 5  # "Скорость проходки, м/час"
    RTR_SPEED = 6  # "Обороты ротора, об/мин"
    RATE_IN = 7  # "Q на входе, л/сек"
    RATE_OUT = 8  # "q на выходе, л/сек"
    PRESSURE = 9  # "давление, атм"
    PRESSURE_CAS = 10  # "давление в затрубе, атм"
    V1 = 11  # "объем в емкости 1, м3"
    V2 = 12  # "объем в емкости 2, м3"
    V3 = 13  # "объем в емкости 3, м3"
    V_CSGO = 14  # объем в цсго (циркуляционная система грубой очистки), м3"
    V_TOTAL = 15  # "общий объем, м3"
    BPR = 16  # "бпр"
    SPEED = 17  # "скорость"
    TEMP_IN = 18  # "температура на входе, С"
    TEMP_OUT = 19  # "температура на выходе, C"
    H1 = 20  # "нужно уточнить что за параметр на скрине, х/мин"
    H2 = 21  # "нужно уточнить что за параметр на скрине, х/мин"
    C1_PERC = 22  # содержание метана, %"
    C1_PLUS_PERC = 23  # "содержание c1+, %"
    GAS_SUM = 24  # "суммарное содержание газа, %"
    MOMENT = 25  # момент, кн*м"
    VOL_DOLIV = 26  # "объем долива, м3"
    DENSITY = 27  # "Плотность раствора, г/см3"


class Telemetry(Base):
    __tablename__ = "telemetry"
    id = Column(UUID(as_uuid=True), primary_key=True, comment="id скважины", default=uuid.uuid4)
    well_name = Column(String, comment="название скважины")
    created_at = Column(DateTime, comment="Дата создания записи")
    measured_at = Column(
        DateTime, default=datetime.datetime(1970, 1, 1), nullable=False, comment="Дата замера параметра"
    )
    parameter = Column(
        ChoiceType(ParamType, impl=Integer()),
        comment="Параметр",
        nullable=False,
    )
    value = Column(Float, comment="Значение параметра")
    well_id = Column(UUID(as_uuid=True), ForeignKey('well.id', ondelete="CASCADE"))

