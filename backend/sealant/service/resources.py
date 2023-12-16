from import_export import resources

from .models import *


class CarsResource(resources.ModelResource):
    """
    Класс CarsResource — это подкласс ModelResource, который определяет поля, которые необходимо
    включить при экспорте данных из модели Cars.
    """

    class Meta:
        model = Cars
        fields = (
            "vehicle_model__name",
            "engine_model__name",
            "transmission_model__name",
            "drive_axle_model__name",
            "steering_axle_model__name",
            "service_company__service__first_name",
            "service_company__service__first_name",
            "client__client__first_name",
        )
