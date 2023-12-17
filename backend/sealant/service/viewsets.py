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


class TechniqueViewSet(viewsets.ViewSet):  # TODO: Test this
    view_is_async = True

    def list(self, request):
        if request.user.is_manager:
            queryset = Technique.objects.all()
            serializer = TechniqueSerializer(queryset, many=True)
            return Response(serializer.data)
        return Response(status=403)

    def create(self, request):
        if request.user.is_manager:
            create = Technique.objects.create(
                name=request.data["name"],
                description=request.data["description"],
            )
            create.save()
            serializer = TechniqueSerializer(create)
            return Response(serializer.data)
        return Response(status=403)

    def retrieve(self, request, pk=None):
        if request.user.is_manager:
            retrieve = get_object_or_404(self.queryset, pk=pk)
            serializer = TechniqueSerializer(retrieve)
            return Response(serializer.data)

    def update(self, request, pk=None):
        if request.user.is_manager:
            instance = self.get_object()
            serializer = TechniqueSerializer(instance=instance, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

    def partial_update(self, request, pk=None):
        if request.user.is_manager:
            update = Technique.objects.update(
                name=request.data["name"],
                description=request.data["description"],
            )
            update.save()
            serializer = TechniqueSerializer(update)
            return Response(serializer.data)

    def destroy(self, request):
        if request.user.is_manager:
            delete = self.get_object()
            delete.delete()
            return Response(status=204)


class EngineViewSet(viewsets.ViewSet):
    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class TransmissionViewSet(viewsets.ViewSet):
    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class AxleViewSet(viewsets.ViewSet):
    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class SteeringAxleViewSet(viewsets.ViewSet):
    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class TypeToViewSet(viewsets.ViewSet):
    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class FailureViewSet(viewsets.ViewSet):
    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class RecoveryMethodViewSet(viewsets.ViewSet):
    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class CarsViewSet(viewsets.ViewSet):  # TODO: Test this
    view_is_async = True

    def list(self, request):
        # Пользователь не авторизовался ↓
        if not request.user.is_authenticated:
            queryset = (
                Cars.objects.all()
            )  # FIXME: Add more configuration - просмотр (доступ только к полям пп.1-10)
            serializer = CarsSerializer(queryset, many=True)
            return Response(serializer.data)
        # Пользователь авторизовался ↓
        if request.user.is_authenticated:
            # Является клиентом ↓
            if request.user.is_client:
                queryset = Cars.objects.filter(client=request.user)
                serializer = CarsSerializer(queryset, many=True)
            # Является сервисной организацией ↓
            if request.user.is_service:
                queryset = Cars.objects.filter(service_company=request.user)
                serializer = CarsSerializer(queryset, many=True)
            # Является менеджером ↓
            if request.user.is_manager:
                queryset = Cars.objects.all()
                serializer = CarsSerializer(queryset, many=True)
            return Response(serializer.data)

    def create(self, request):
        if request.user.is_manager:
            create = Cars.objects.create(
                vehicle_model=request.data["vehicle_model"],
                engine_model=request.data["engine_model"],
                transmission_model=request.data["transmission_model"],
                drive_axle_model=request.data["drive_axle_model"],
                steering_axle_model=request.data["steering_axle_model"],
                service_company=request.data["service_company"],
                client=request.data["client"],
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

    def retrieve(self, request, pk=None):
        if request.user.is_client or request.user.is_service or request.user.is_manager:
            retrieve = get_object_or_404(self.queryset, pk=pk)
            serializer = CarsSerializer(retrieve)
            return Response(serializer.data)

    def update(self, request, pk=None):
        if request.user.is_manager:
            instance = self.get_object()
            serializer = CarsSerializer(instance=instance, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

    def partial_update(self, request, pk=None):
        if request.user.is_manager:
            update = Cars.objects.update(
                vehicle_model=request.data["vehicle_model"],
                engine_model=request.data["engine_model"],
                transmission_model=request.data["transmission_model"],
                drive_axle_model=request.data["drive_axle_model"],
                steering_axle_model=request.data["steering_axle_model"],
                service_company=request.data["service_company"],
                client=request.data["client"],
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
            update.save()
            serializer = CarsSerializer(update)
            return Response(serializer.data)

    def destroy(self, request):
        if request.user.is_manager:
            delete = self.get_object()
            delete.delete()
            return Response(status=204)


class ToViewSet(viewsets.ViewSet):
    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class ComplaintsViewSet(viewsets.ViewSet):
    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
