import uuid

from pydantic import BaseModel, Field


class TextDataRequest(BaseModel):
    well_id: uuid.UUID = Field(title="id скважины")


class TextDataResponse(BaseModel):
    bh_depth: float = Field(title="Глубина забоя, м", ge=0)
    bit_depth: float = Field(title="Глубина долота, м", ge=0)
    bh_upper: float = Field(title="Глубина над забоем, м", ge=0)
