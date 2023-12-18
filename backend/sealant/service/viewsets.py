from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

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

from users.models import Service, Client

# Спагетти без принципа DRY (* ￣︿￣)

# Была идея использовать наследование, но тогда мы пойдем против принципа SOLID (～￣▽￣)～


class TechniqueViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Technique.objects.all()
                serializer = TechniqueSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                create = Technique.objects.create(
                    name=request.data["name"], description=request.data["description"]
                )
                create.save()
                serializer = TechniqueSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Technique.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = TechniqueSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                update = get_object_or_404(Technique.objects.all(), pk=pk)
                serializer = TechniqueSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(Technique.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class EngineViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Engine.objects.all()
                serializer = EngineSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                create = Engine.objects.create(
                    name=request.data["name"], description=request.data["description"]
                )
                create.save()
                serializer = EngineSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Engine.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = EngineSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                update = get_object_or_404(Engine.objects.all(), pk=pk)
                serializer = EngineSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(Engine.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class TransmissionViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Transmission.objects.all()
                serializer = TransmissionSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                create = Transmission.objects.create(
                    name=request.data["name"], description=request.data["description"]
                )
                create.save()
                serializer = TransmissionSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Transmission.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = TransmissionSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                update = get_object_or_404(Transmission.objects.all(), pk=pk)
                serializer = TransmissionSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(Transmission.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class AxleViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Axle.objects.all()
                serializer = AxleSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                create = Axle.objects.create(
                    name=request.data["name"], description=request.data["description"]
                )
                create.save()
                serializer = AxleSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Axle.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = AxleSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                update = get_object_or_404(Axle.objects.all(), pk=pk)
                serializer = AxleSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(Axle.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class SteeringAxleViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = SteeringAxle.objects.all()
                serializer = SteeringAxleSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                create = SteeringAxle.objects.create(
                    name=request.data["name"], description=request.data["description"]
                )
                create.save()
                serializer = SteeringAxleSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = SteeringAxle.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = SteeringAxleSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                update = get_object_or_404(SteeringAxle.objects.all(), pk=pk)
                serializer = SteeringAxleSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(SteeringAxle.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class TypeToViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = TypeTo.objects.all()
                serializer = TypeToSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                create = TypeTo.objects.create(
                    name=request.data["name"], description=request.data["description"]
                )
                create.save()
                serializer = TypeToSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = TypeTo.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = TypeToSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                update = get_object_or_404(TypeTo.objects.all(), pk=pk)
                serializer = TypeToSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(TypeTo.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class FailureViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Failure.objects.all()
                serializer = FailureSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                create = Failure.objects.create(
                    name=request.data["name"], description=request.data["description"]
                )
                create.save()
                serializer = FailureSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Failure.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = FailureSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                update = get_object_or_404(Failure.objects.all(), pk=pk)
                serializer = FailureSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(Failure.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class RecoveryMethodViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = RecoveryMethod.objects.all()
                serializer = RecoveryMethodSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                create = RecoveryMethod.objects.create(
                    name=request.data["name"], description=request.data["description"]
                )
                create.save()
                serializer = RecoveryMethodSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = RecoveryMethod.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = RecoveryMethodSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                update = get_object_or_404(RecoveryMethod.objects.all(), pk=pk)
                serializer = RecoveryMethodSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(RecoveryMethod.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class CarsViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        # Пользователь не авторизовался ↓
        if not request.user.is_authenticated:
            # просмотр (доступ только к полям пп.1-10) Как в ТЗ!
            queryset = Cars.objects.all()[:11]
            serializer = CarsSerializer(queryset, many=True)
            return Response(serializer.data)
        # Пользователь авторизовался ↓
        if request.user.is_authenticated:
            # Является клиентом ↓
            if request.user.is_client:
                client_obj = Client.objects.get(client_id=request.user.pk)
                queryset = Cars.objects.filter(client=client_obj)
                serializer = CarsSerializer(queryset, many=True)
                return Response(serializer.data)
            # Является сервисной организацией ↓
            if request.user.is_service:
                service_obj = Service.objects.get(service_id=request.user.pk)
                queryset = Cars.objects.filter(service_company=service_obj)
                serializer = CarsSerializer(queryset, many=True)
                return Response(serializer.data)
            # Является менеджером ↓
            if request.user.is_manager:
                queryset = Cars.objects.all()
                serializer = CarsSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager:
                technique_obj = get_object_or_404(
                    Technique,
                    id=request.data["vehicle_model"],
                )
                engine_obj = get_object_or_404(
                    Engine,
                    id=request.data["engine_model"],
                )
                transmission_obj = get_object_or_404(
                    Transmission,
                    id=request.data["transmission_model"],
                )
                axle_obj = get_object_or_404(
                    Axle,
                    id=request.data["drive_axle_model"],
                )
                steering_axle_obj = get_object_or_404(
                    SteeringAxle,
                    id=request.data["steering_axle_model"],
                )
                service_obj = get_object_or_404(
                    Service,
                    id=request.data["service_company"],
                )
                client_obj = get_object_or_404(
                    Client,
                    id=request.data["client"],
                )
                create = Cars.objects.create(
                    vehicle_model=technique_obj,
                    engine_model=engine_obj,
                    transmission_model=transmission_obj,
                    drive_axle_model=axle_obj,
                    steering_axle_model=steering_axle_obj,
                    service_company=service_obj,
                    client=client_obj,
                    сonsignee=request.data["сonsignee"],
                    engine_number=request.data["engine_number"],
                    drive_axle_number=request.data["drive_axle_number"],
                    delivery_address=request.data["delivery_address"],
                    transmission_number=request.data["transmission_number"],
                    steering_axle_number=request.data["steering_axle_number"],
                    factory_number=request.data["factory_number"],
                    equipment=request.data["equipment"],
                    supply_contract_date=request.data["supply_contract_date"],
                    shipped_from_factory=request.data["shipped_from_factory"],
                )
                create.save()
                serializer = CarsSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        client = request.user.is_client
        service = request.user.is_service
        manager = request.user.is_manager
        if request.user.is_authenticated:
            if client or service or manager:
                queryset = Cars.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = CarsSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Cars.objects.all()
                update = get_object_or_404(queryset, pk=pk)
                serializer = CarsSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(Cars.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class ToViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            if request.user.is_client:
                client_obj = Client.objects.get(client_id=request.user.pk)
                queryset = To.objects.filter(
                    car__client=client_obj
                )  # TODO: Надо проверить этот момент
                serializer = ToSerializer(queryset, many=True)
                return Response(serializer.data)
            if request.user.is_service:
                service_obj = Service.objects.get(service_id=request.user.pk)
                queryset = To.objects.filter(service_company=service_obj)
                serializer = ToSerializer(queryset, many=True)
                return Response(serializer.data)
            if request.user.is_manager:
                queryset = To.objects.all()
                serializer = ToSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        client = request.user.is_client
        service = request.user.is_service
        manager = request.user.is_manager
        if request.user.is_authenticated:
            if client or service or manager:
                type_of_maintenance = get_object_or_404(
                    TypeTo,
                    id=request.data["type_of_maintenance"],
                )
                maintenance_company = get_object_or_404(
                    Service,
                    id=request.data["maintenance_company"],
                )
                service_company = get_object_or_404(
                    Service,
                    id=request.data["service_company"],
                )
                car = get_object_or_404(
                    Cars,
                    id=request.data["car"],
                )
                create = To.objects.create(
                    type_of_maintenance=type_of_maintenance,
                    maintenance_company=maintenance_company,
                    service_company=service_company,
                    car=car,
                    order_number=request.data["order_number"],
                    maintenance_date=request.data["maintenance_date"],
                    order_date=request.data["order_date"],
                    operating_hours=request.data["operating_hours"],
                )
                create.save()
                serializer = ToSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        client = request.user.is_client
        service = request.user.is_service
        manager = request.user.is_manager
        if request.user.is_authenticated:
            if client or service or manager:
                queryset = To.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = ToSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = To.objects.all()
                update = get_object_or_404(queryset, pk=pk)
                serializer = ToSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(To.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class ComplaintsViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            if request.user.is_client:
                client_obj = Client.objects.get(client_id=request.user.pk)
                queryset = Complaints.objects.filter(
                    car__client=client_obj
                )  # TODO: Надо проверить этот момент
                serializer = ComplaintsSerializer(queryset, many=True)
                return Response(serializer.data)
            if request.user.is_service:
                service_obj = Service.objects.get(service_id=request.user.pk)
                queryset = Complaints.objects.filter(service_company=service_obj)
                serializer = ComplaintsSerializer(queryset, many=True)
                return Response(serializer.data)
            if request.user.is_manager:
                queryset = Complaints.objects.all()
                serializer = ComplaintsSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        service = request.user.is_service
        manager = request.user.is_manager
        if request.user.is_authenticated:
            if service or manager:
                failure_node = get_object_or_404(
                    Failure,
                    id=request.data["failure_node"],
                )
                recovery_method = get_object_or_404(
                    RecoveryMethod,
                    id=request.data["recovery_method"],
                )
                service_company = get_object_or_404(
                    Service,
                    id=request.data["service_company"],
                )
                car = get_object_or_404(
                    Cars,
                    id=request.data["car"],
                )
                create = Complaints.objects.create(
                    failure_node=failure_node,
                    recovery_method=recovery_method,
                    service_company=service_company,
                    car=car,
                    parts_used=request.data["parts_used"],
                    failure_description=request.data["failure_description"],
                    refusal_date=request.data["refusal_date"],
                    restore_date=request.data["restore_date"],
                    operating_hours=request.data["operating_hours"],
                    equipment_downtime=request.data["equipment_downtime"],
                )
                create.save()
                serializer = ComplaintsSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        client = request.user.is_client
        service = request.user.is_service
        manager = request.user.is_manager
        if request.user.is_authenticated:
            if client or service or manager:
                queryset = Complaints.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = ComplaintsSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Complaints.objects.all()
                update = get_object_or_404(queryset, pk=pk)
                serializer = ComplaintsSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(Complaints.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)
