from django.urls import path, include
from rest_framework import routers

from .views import cars_export_xlsx, cars_export_json

from .viewsets import (
    TechniqueViewSet,
    EngineViewSet,
    TransmissionViewSet,
    AxleViewSet,
    SteeringAxleViewSet,
    TypeToViewSet,
    FailureViewSet,
    RecoveryMethodViewSet,
    CarsViewSet,
    ToViewSet,
    ComplaintsViewSet,
)

router = routers.DefaultRouter()
router.register(r"teh", TechniqueViewSet, basename="TV1")
router.register(r"eng", EngineViewSet, basename="EV")
router.register(r"tran", TransmissionViewSet, basename="TV2")
router.register(r"axle", AxleViewSet, basename="AV")
router.register(r"steaxle", SteeringAxleViewSet, basename="SAV")
router.register(r"typeto", TypeToViewSet, basename="TTV")
router.register(r"fail", FailureViewSet, basename="FV")
router.register(r"reco", RecoveryMethodViewSet, basename="RMV")
router.register(r"cars", CarsViewSet, basename="CV1")
router.register(r"to", ToViewSet, basename="TV3")
router.register(r"compl", ComplaintsViewSet, basename="CV2")

urlpatterns = [
    path("", include(router.urls)),
    path("export-cars-xlsx/", cars_export_xlsx, name="export_xlsx"),
    path("export-cars-json/", cars_export_json, name="export_json"),
]
