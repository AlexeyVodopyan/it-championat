from src.fixtures.telemetry import TelemetryFactory
from src.db import get_session


def generate_telemetry(n=1000):
    session = get_session()
    TelemetryFactory._meta.sqlalchemy_session = session

    for _ in range(n):
        TelemetryFactory()

    session.commit()


if __name__ == '__main__':
    generate_telemetry(1000)
