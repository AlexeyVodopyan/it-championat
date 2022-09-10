import random

from src.back.db import get_session
from src.back.fixtures.company import CompanyFactory
from src.back.fixtures.equipment import EquipmentFactory, EquipmentScheduleFactory
from src.back.fixtures.telemetry import TelemetryFactory
from src.back.fixtures.well import WellFactory


def _generate_telemetry(well, n_for_well=1000):
    for _ in range(n_for_well):
        TelemetryFactory(well=well)


def _generaty_companies(n_companies=5):
    companies = [CompanyFactory() for _ in range(n_companies)]
    return companies


def _generate_equpments(well, companies, max_equipments_for_company=5):
    equipments = []
    for company in companies:
        n_equipments_for_company = random.randint(1, max_equipments_for_company)
        for _ in range(n_equipments_for_company):
            equipments.append(EquipmentFactory(well=well, company=company))
    return equipments


def _generate_equip_schedule(equipment, max_repairs=5):
    schedule = []
    n_repairs = random.randint(1, max_repairs)

    for _ in range(n_repairs):
        schedule.append(EquipmentScheduleFactory(equipment=equipment))


def _generate_wells(n_wells=5):
    # Drilling Well как минимум одна
    well = WellFactory(status=1)
    _generate_telemetry(well)

    companies = _generaty_companies()

    for _ in range(n_wells - 1):
        well = WellFactory()
        _generate_telemetry(well)
        equipments = _generate_equpments(well, companies)

        for equip in equipments:
            _generate_equip_schedule(equip)


def generate_data():
    session = get_session()

    WellFactory._meta.sqlalchemy_session = session
    TelemetryFactory._meta.sqlalchemy_session = session
    CompanyFactory._meta.sqlalchemy_session = session
    EquipmentFactory._meta.sqlalchemy_session = session
    EquipmentScheduleFactory._meta.sqlalchemy_session = session

    _generate_wells()

    session.commit()


if __name__ == "__main__":
    generate_data()
