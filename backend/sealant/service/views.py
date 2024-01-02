from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from .resources import CarsResource


@api_view(["GET"])
@permission_classes([IsAuthenticated, IsAdminUser])
def cars_export_xlsx(request):
    """
    Функция экспортирует данные автомобиля в файл Excel и возвращает их в виде загружаемого ответа.

    Parameters
    ----------
    request
        Параметр request — это объект, который представляет HTTP-запрос, сделанный клиентом. Он содержит
    такую информацию, как метод запроса, заголовки и тело. В данном случае он используется для обработки
    запроса на экспорт данных об автомобилях в файл Excel.

    Returns
    -------
        объект ответа HTTP.
    """
    cars_resource = CarsResource()
    data = cars_resource.export()
    response = HttpResponse(
        data.xlsx,
        content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    )

    response["Content-Disposition"] = 'attachment; filename="cars.xlsx"'
    return response


@api_view(["GET"])
@permission_classes([IsAuthenticated, IsAdminUser])
def cars_export_json(request):
    cars_resource = CarsResource()
    data = cars_resource.export()
    response = HttpResponse(
        data.json,
        content_type="application/json",
    )

    response["Content-Disposition"] = 'attachment; filename="cars.json"'
    return response
