# stdlib
import datetime as dt

# thirdparty
import factory
from factory import fuzzy as fz

# project
from src.back import tables
from src.back.fixtures.company import CompanyFactory
from src.back.fixtures.well import WellFactory


class EquipmentFactory(factory.alchemy.SQLAlchemyModelFactory):
    id = factory.Faker("uuid4", cast_to=None)
    name = factory.Faker("word", locale="ru")
    lifetime = factory.Faker("pyint", min_value=10, max_value=200)
    user_note = factory.Faker("sentence", locale="ru")
    well = factory.SubFactory(WellFactory)
    company = factory.SubFactory(CompanyFactory)

    class Meta:
        model = tables.Equipment


class EquipmentScheduleFactory(factory.alchemy.SQLAlchemyModelFactory):
    id = factory.Faker("uuid4", cast_to=None)
    work_started = fz.FuzzyDate(
        dt.datetime.now(tz=dt.timezone.utc).date(),
        dt.datetime.now(tz=dt.timezone.utc).date() + dt.timedelta(days=3),
    )
    work_finished = fz.FuzzyDate(
        dt.datetime.now(tz=dt.timezone.utc).date() + dt.timedelta(days=5),
        dt.datetime.now(tz=dt.timezone.utc).date() + dt.timedelta(days=10),
    )
    equipment = factory.SubFactory(EquipmentFactory)

    class Meta:
        model = tables.EquipmentSchedule
