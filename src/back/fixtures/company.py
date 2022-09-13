# stdlib
import random

# thirdparty
import factory

# project
from src.back import tables


class CompanyFactory(factory.alchemy.SQLAlchemyModelFactory):
    id = factory.Faker("uuid4", cast_to=None)
    name = factory.Faker("word", locale="ru")

    @factory.lazy_attribute
    def type(self):
        return random.choice(list(tables.CompanyType))

    class Meta:
        model = tables.Company
