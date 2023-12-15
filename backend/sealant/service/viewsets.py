from rest_framework import viewsets
from rest_framework.response import Response

from .models import (
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


# # For example !!!
# class ServiceCompanyViewSet(viewsets.ViewSet):
#     def list(self, request):
#         if request.user.is_manager:
#             queryset = ServiceCompany.objects.all()
#             serializer = ServiceCompanySerializer(queryset, many=True)
#             return Response(serializer.data)
#         return Response(status=403)

#     def create(self, request):
#         if request.user.is_manager:
#             service = ServiceCompany.objects.create(
#                 name=request.data["name"],
#                 description=request.data["description"],
#             )
#             service.save()
#             serializer = ServiceCompanySerializer(service)
#             return Response(serializer.data)
#         return Response(status=403)


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
