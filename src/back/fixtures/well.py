# stdlib
import random

# thirdparty
import factory

# project
from src.back import tables


class WellFactory(factory.alchemy.SQLAlchemyModelFactory):
    id = factory.Faker("uuid4", cast_to=None)

    @factory.lazy_attribute
    def status(self):
        return random.choice(list(tables.WellDrillingStatus))

    class Meta:
        model = tables.Well
