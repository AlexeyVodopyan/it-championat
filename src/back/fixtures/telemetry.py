# stdlib
import datetime as dt
import random

# thirdparty
import factory
from factory import fuzzy as fz

# project
from src import tables


class TelemetryFactory(factory.alchemy.SQLAlchemyModelFactory):
    well_id = factory.Faker("uuid4", cast_to=None)
    well_name = factory.Faker("word", locale="ru")
    created_at = fz.FuzzyDateTime(dt.datetime(2021, 1, 1, hour=1, tzinfo=dt.timezone.utc))
    measured_at = fz.FuzzyDateTime(dt.datetime(2021, 1, 1, 1, tzinfo=dt.timezone.utc))

    @factory.lazy_attribute
    def parameter(self):
        return random.choice(list(tables.ParamType))

    @factory.lazy_attribute
    def value(self):
        # можно будет добавить логику генерации в зависимости от параметра
        return random.uniform(1, 100)

    class Meta:
        model = tables.Telemetry
