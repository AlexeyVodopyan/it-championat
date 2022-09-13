from fastapi import APIRouter

from src.back.contracts.text_data_view import TextDataRequest, TextDataResponse

main_router = APIRouter(prefix="/text_data", tags=["TextData"])


@main_router.get("/get_txt_data", response_model=TextDataResponse)
def calc_vlp(request: TextDataRequest):
    """Получение данных для окна с текстовыми данными"""
    pass
