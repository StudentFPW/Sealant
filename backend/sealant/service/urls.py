from django.urls import path, include
from rest_framework import routers

from .viewsets import (
    ServiceCompanyViewSet,
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
router.register(r"servcomp", ServiceCompanyViewSet, basename="SCV")
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
]
