from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
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

from users.models import Service, Client


class TechniqueViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        """
        Эта функция возвращает список объектов Technique, если пользователь прошел аутентификацию и является
        менеджером, в противном случае она возвращает соответствующий статус ответа.
        """
        if request.user.is_authenticated:
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = Technique.objects.all()
                serializer = TechniqueSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        """
        Функция create создает новый объект Technique, если пользователь аутентифицирован и является
        менеджером, и возвращает сериализованные данные созданного объекта.
        """
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
                create = Technique.objects.create(
                    name=request.data["name"], description=request.data["description"]
                )
                create.save()
                serializer = TechniqueSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        """
        Функция извлекает объект Technique, если пользователь прошел проверку подлинности и является
        менеджером, в противном случае она возвращает соответствующий статус ответа.
        """
        if request.user.is_authenticated:
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = Technique.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = TechniqueSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        """
        Эта функция обновляет объект Technique, если пользователь прошел аутентификацию и является
        менеджером, в противном случае она возвращает соответствующий статус ответа.
        """
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
                update = get_object_or_404(Technique.objects.all(), pk=pk)
                serializer = TechniqueSerializer(update, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        """
        Функция destroy удаляет объект Technique, если пользователь аутентифицирован и является менеджером,
        в противном случае она возвращает соответствующий код состояния ответа.
        """
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
                delete = get_object_or_404(Technique.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class EngineViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = Engine.objects.all()
                serializer = EngineSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = Engine.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = EngineSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            if request.user.is_manager or request.user.is_superuser:
                delete = get_object_or_404(Engine.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class TransmissionViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = Transmission.objects.all()
                serializer = TransmissionSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = Transmission.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = TransmissionSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            if request.user.is_manager or request.user.is_superuser:
                delete = get_object_or_404(Transmission.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class AxleViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = Axle.objects.all()
                serializer = AxleSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = Axle.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = AxleSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            if request.user.is_manager or request.user.is_superuser:
                delete = get_object_or_404(Axle.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class SteeringAxleViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = SteeringAxle.objects.all()
                serializer = SteeringAxleSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = SteeringAxle.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = SteeringAxleSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            if request.user.is_manager or request.user.is_superuser:
                delete = get_object_or_404(SteeringAxle.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class TypeToViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = TypeTo.objects.all()
                serializer = TypeToSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = TypeTo.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = TypeToSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            if request.user.is_manager or request.user.is_superuser:
                delete = get_object_or_404(TypeTo.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class FailureViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = Failure.objects.all()
                serializer = FailureSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = Failure.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = FailureSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            if request.user.is_manager or request.user.is_superuser:
                delete = get_object_or_404(Failure.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class RecoveryMethodViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        if request.user.is_authenticated:
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = RecoveryMethod.objects.all()
                serializer = RecoveryMethodSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            manager = request.user.is_manager
            client = request.user.is_client
            service = request.user.is_service
            if request.user.is_superuser or manager or client or service:
                queryset = RecoveryMethod.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = RecoveryMethodSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
            if request.user.is_manager or request.user.is_superuser:
                delete = get_object_or_404(RecoveryMethod.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class CarsViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        """
        Эта функция возвращает список автомобилей на основе аутентификации и роли пользователя.
        """
        query = self.request.query_params
        # Пользователь не авторизовался ↓
        if not request.user.is_authenticated:
            if query:
                queryset = Cars.objects.filter(
                    factory_number=query.get("factory_number")
                ).order_by(
                    "-shipped_from_factory",
                )
            else:
                queryset = Cars.objects.filter().order_by(
                    "-shipped_from_factory",
                )
            serializer = CarsSerializer(queryset, many=True)
            return Response(serializer.data)
        # Пользователь авторизовался ↓
        if request.user.is_authenticated:
            if request.user.is_superuser:
                if query:
                    queryset = Cars.objects.filter(
                        factory_number=query.get("factory_number")
                    ).order_by(
                        "-shipped_from_factory",
                    )
                else:
                    queryset = Cars.objects.filter().order_by(
                        "-shipped_from_factory",
                    )
                serializer = CarsSerializer(queryset, many=True)
                return Response(serializer.data)
            # Является клиентом ↓
            if request.user.is_client:
                client_obj = Client.objects.get(client_id=request.user.pk)
                if query:
                    queryset = Cars.objects.filter(
                        factory_number=query.get("factory_number"), client=client_obj
                    ).order_by(
                        "-shipped_from_factory",
                    )
                else:
                    queryset = Cars.objects.filter(client=client_obj).order_by(
                        "-shipped_from_factory",
                    )
                serializer = CarsSerializer(queryset, many=True)
                return Response(serializer.data)
            # Является сервисной организацией ↓
            if request.user.is_service:
                service_obj = Service.objects.get(service_id=request.user.pk)
                if query:
                    queryset = Cars.objects.filter(
                        factory_number=query.get("factory_number"),
                        service_company=service_obj,
                    ).order_by(
                        "-shipped_from_factory",
                    )
                else:
                    queryset = Cars.objects.filter(
                        service_company=service_obj
                    ).order_by(
                        "-shipped_from_factory",
                    )
                serializer = CarsSerializer(queryset, many=True)
                return Response(serializer.data)
            # Является менеджером ↓
            if request.user.is_manager:
                if query:
                    queryset = Cars.objects.filter(
                        factory_number=query.get("factory_number")
                    ).order_by(
                        "-shipped_from_factory",
                    )
                else:
                    queryset = Cars.objects.filter().order_by(
                        "-shipped_from_factory",
                    )
                serializer = CarsSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        """
        Функция create создает новый экземпляр модели Cars с предоставленными данными, если пользователь
        прошел аутентификацию и является менеджером.
        """
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
                    service_id=request.data["service_company"],
                )
                client_obj = get_object_or_404(
                    Client,
                    client_id=request.data["client"],
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
                    shipped_from_factory=request.data["shipped_from_factory"],
                    supply_contract_date=request.data["supply_contract_date"],
                )
                create.save()
                serializer = CarsSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def retrieve(self, request, pk=None):
        """
        Функция get извлекает конкретный объект автомобиля в зависимости от роли пользователя (клиент,
        служба или менеджер) и возвращает сериализованные данные.
        """
        client = request.user.is_client
        service = request.user.is_service
        manager = request.user.is_manager
        if request.user.is_authenticated:
            if request.user.is_superuser:
                queryset = Cars.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = CarsSerializer(retrieve)
                return Response(serializer.data)
            if client:
                client_obj = Client.objects.get(client_id=request.user.pk)
                queryset = Cars.objects.filter(client=client_obj)
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = CarsSerializer(retrieve)
                return Response(serializer.data)
            if service:
                service_obj = Service.objects.get(service_id=request.user.pk)
                queryset = Cars.objects.filter(service_company=service_obj)
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = CarsSerializer(retrieve)
                return Response(serializer.data)
            if manager:
                queryset = Cars.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = CarsSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        """
        Функция update обновляет объект автомобиля, если пользователь аутентифицирован и является
        менеджером, в противном случае она возвращает соответствующий статус ответа.
        """
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
        """
        Функция «destroy» удаляет объект автомобиля, если пользователь аутентифицирован и является
        менеджером, в противном случае она возвращает соответствующий код состояния ответа.
        """
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
                delete = get_object_or_404(Cars.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class ToViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        """
        Функция возвращает список объектов на основе роли пользователя (клиент, служба или менеджер) и
        статуса их аутентификации.
        """
        query = self.request.query_params
        if request.user.is_authenticated:
            if request.user.is_superuser:
                if query:
                    queryset = To.objects.filter(
                        car__factory_number=query.get("factory_number")
                    ).order_by(
                        "-maintenance_date",
                    )
                else:
                    queryset = To.objects.filter().order_by(
                        "-maintenance_date",
                    )
                serializer = ToSerializer(queryset, many=True)
                return Response(serializer.data)
            if request.user.is_client:
                client_obj = Client.objects.get(client_id=request.user.pk)
                if query:
                    queryset = To.objects.filter(
                        car__factory_number=query.get("factory_number"),
                        car__client=client_obj,
                    ).order_by(
                        "-maintenance_date",
                    )
                else:
                    queryset = To.objects.filter(car__client=client_obj).order_by(
                        "-maintenance_date",
                    )
                serializer = ToSerializer(queryset, many=True)
                return Response(serializer.data)
            if request.user.is_service:
                service_obj = Service.objects.get(service_id=request.user.pk)
                if query:
                    queryset = To.objects.filter(
                        car__factory_number=query.get("factory_number"),
                        service_company=service_obj,
                    ).order_by(
                        "-maintenance_date",
                    )
                else:
                    queryset = To.objects.filter(service_company=service_obj).order_by(
                        "-maintenance_date",
                    )
                serializer = ToSerializer(queryset, many=True)
                return Response(serializer.data)
            if request.user.is_manager:
                if query:
                    queryset = To.objects.filter(
                        car__factory_number=query.get("factory_number")
                    ).order_by(
                        "-maintenance_date",
                    )
                else:
                    queryset = To.objects.filter().order_by(
                        "-maintenance_date",
                    )
                serializer = ToSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        """
        Функция create создает новый объект To с предоставленными данными и возвращает сериализованные
        данные.
        """
        client = request.user.is_client
        service = request.user.is_service
        manager = request.user.is_manager
        if request.user.is_authenticated:
            if client or service or manager or request.user.is_superuser:
                type_of_maintenance = get_object_or_404(
                    TypeTo,
                    id=request.data["type_of_maintenance"],
                )
                maintenance_company = get_object_or_404(
                    Service,
                    service_id=request.data["maintenance_company"],
                )
                service_company = get_object_or_404(
                    Service,
                    service_id=request.data["service_company"],
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
        """
        Функция get извлекает конкретный объект в зависимости от роли пользователя (клиент, служба или
        менеджер) и возвращает его сериализованные данные.
        """
        client = request.user.is_client
        service = request.user.is_service
        manager = request.user.is_manager
        if request.user.is_authenticated:
            if request.user.is_superuser:
                queryset = To.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = ToSerializer(retrieve)
                return Response(serializer.data)
            if client:
                client_obj = Client.objects.get(client_id=request.user.pk)
                queryset = To.objects.filter(car__client=client_obj)
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = ToSerializer(retrieve)
                return Response(serializer.data)
            if service:
                service_obj = Service.objects.get(service_id=request.user.pk)
                queryset = To.objects.filter(service_company=service_obj)
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = ToSerializer(retrieve)
                return Response(serializer.data)
            if manager:
                queryset = To.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = ToSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        """
        Функция update обновляет объект «To», если пользователь аутентифицирован и является менеджером, в
        противном случае она возвращает соответствующий статус ответа.
        """
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
        """
        Функция проверяет, аутентифицирован ли пользователь и является ли он менеджером, и если да, удаляет
        объект и возвращает код состояния 204; в противном случае он возвращает код состояния 403, если
        пользователь не является менеджером, или код состояния 401, если пользователь не прошел проверку
        подлинности.
        """
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
                delete = get_object_or_404(To.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


class ComplaintsViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        """
        Функция возвращает список жалоб в зависимости от роли пользователя (клиент, служба или менеджер),
        если пользователь прошел аутентификацию.
        """
        query = self.request.query_params
        if request.user.is_authenticated:
            if request.user.is_superuser:
                if query:
                    queryset = Complaints.objects.filter(
                        car__factory_number=query.get("factory_number")
                    ).order_by(
                        "-refusal_date",
                    )
                else:
                    queryset = Complaints.objects.filter().order_by(
                        "-refusal_date",
                    )
                serializer = ComplaintsSerializer(queryset, many=True)
                return Response(serializer.data)
            if request.user.is_client:
                client_obj = Client.objects.get(client_id=request.user.pk)
                if query:
                    queryset = Complaints.objects.filter(
                        car__factory_number=query.get("factory_number"),
                        car__client=client_obj,
                    ).order_by(
                        "-refusal_date",
                    )
                else:
                    queryset = Complaints.objects.filter(
                        car__client=client_obj
                    ).order_by(
                        "-refusal_date",
                    )
                serializer = ComplaintsSerializer(queryset, many=True)
                return Response(serializer.data)
            if request.user.is_service:
                service_obj = Service.objects.get(service_id=request.user.pk)
                if query:
                    queryset = Complaints.objects.filter(
                        car__factory_number=query.get("factory_number"),
                        service_company=service_obj,
                    ).order_by(
                        "-refusal_date",
                    )
                else:
                    queryset = Complaints.objects.filter(
                        service_company=service_obj
                    ).order_by(
                        "-refusal_date",
                    )
                serializer = ComplaintsSerializer(queryset, many=True)
                return Response(serializer.data)
            if request.user.is_manager:
                if query:
                    queryset = Complaints.objects.filter(
                        car__factory_number=query.get("factory_number")
                    ).order_by(
                        "-refusal_date",
                    )
                else:
                    queryset = Complaints.objects.filter().order_by(
                        "-refusal_date",
                    )
                serializer = ComplaintsSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def create(self, request):
        """
        Функция «создать» создает новый объект жалобы, если пользователь прошел аутентификацию и имеет
        необходимые разрешения.
        """
        service = request.user.is_service
        manager = request.user.is_manager
        if request.user.is_authenticated:
            if service or manager or request.user.is_superuser:
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
                    service_id=request.data["service_company"],
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
        """
        Функция «получить» извлекает конкретную жалобу в зависимости от роли пользователя (клиент, служба
        или менеджер) и возвращает сериализованные данные жалобы.
        """
        client = request.user.is_client
        service = request.user.is_service
        manager = request.user.is_manager
        if request.user.is_authenticated:
            if request.user.is_superuser:
                queryset = Complaints.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = ComplaintsSerializer(retrieve)
                return Response(serializer.data)
            if client:
                client_obj = Client.objects.get(client_id=request.user.pk)
                queryset = Complaints.objects.filter(car__client=client_obj)
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = ComplaintsSerializer(retrieve)
                return Response(serializer.data)
            if service:
                service_obj = Service.objects.get(service_id=request.user.pk)
                queryset = Complaints.objects.filter(service_company=service_obj)
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = ComplaintsSerializer(retrieve)
                return Response(serializer.data)
            if manager:
                queryset = Complaints.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = ComplaintsSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        """
        Эта функция обновляет объект жалобы, если пользователь прошел аутентификацию и является менеджером.
        """
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
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
        """
        Функция «destroy» удаляет объект жалобы, если пользователь аутентифицирован и является менеджером, в
        противном случае она возвращает соответствующий код состояния ответа.
        """
        if request.user.is_authenticated:
            if request.user.is_manager or request.user.is_superuser:
                delete = get_object_or_404(Complaints.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)
