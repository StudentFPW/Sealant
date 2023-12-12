from rest_framework import viewsets

from .models import (
    ServiceCompany,
    Technique,
    Engine,
    Transmission,
    Axle,
    SteeringAxle,
    TypeTo,
    Failure,
    RecoveryMethod,
    Cars,
    To,
    Complaints,
)
from .serializers import (
    ServiceCompanySerializer,
    TechniqueSerializer,
    EngineSerializer,
    TransmissionSerializer,
    AxleSerializer,
    SteeringAxleSerializer,
    TypeToSerializer,
    FailureSerializer,
    RecoveryMethodSerializer,
    CarsSerializer,
    ToSerializer,
    ComplaintsSerializer,
)


class ServiceCompanyViewSet(viewsets.ModelViewSet):
    queryset = ServiceCompany.objects.all()
    serializer_class = ServiceCompanySerializer


class TechniqueViewSet(viewsets.ModelViewSet):
    queryset = Technique.objects.all()
    serializer_class = TechniqueSerializer


class EngineViewSet(viewsets.ModelViewSet):
    queryset = Engine.objects.all()
    serializer_class = EngineSerializer


class TransmissionViewSet(viewsets.ModelViewSet):
    queryset = Transmission.objects.all()
    serializer_class = TransmissionSerializer


class AxleViewSet(viewsets.ModelViewSet):
    queryset = Axle.objects.all()
    serializer_class = AxleSerializer


class SteeringAxleViewSet(viewsets.ModelViewSet):
    queryset = SteeringAxle.objects.all()
    serializer_class = SteeringAxleSerializer


class TypeToViewSet(viewsets.ModelViewSet):
    queryset = TypeTo.objects.all()
    serializer_class = TypeToSerializer


class FailureViewSet(viewsets.ModelViewSet):
    queryset = Failure.objects.all()
    serializer_class = FailureSerializer


class RecoveryMethodViewSet(viewsets.ModelViewSet):
    queryset = RecoveryMethod.objects.all()
    serializer_class = RecoveryMethodSerializer


class CarsViewSet(viewsets.ModelViewSet):
    queryset = Cars.objects.all()
    serializer_class = CarsSerializer


class ToViewSet(viewsets.ModelViewSet):
    queryset = To.objects.all()
    serializer_class = ToSerializer


class ComplaintsViewSet(viewsets.ModelViewSet):
    queryset = Complaints.objects.all()
    serializer_class = ComplaintsSerializer
