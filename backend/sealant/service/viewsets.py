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

from users.models import Service, Client, Manager

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
        """
        Функция возвращает список объектов Technique, если пользователь является менеджером, в противном
        случае она возвращает код состояния 403.
        """
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Technique.objects.all()
                serializer = TechniqueSerializer(queryset, many=True)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=403)

    def create(self, request):
        """
        Функция create создает новый объект Technique, если пользователь является менеджером, в противном
        случае она возвращает код состояния 403.
        """
        if request.user.is_authenticated:
            if request.user.is_manager:
                create = Technique.objects.create(
                    name=request.data["name"],
                    description=request.data["description"],
                )
                create.save()
                serializer = TechniqueSerializer(create)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=403)

    def retrieve(self, request, pk=None):
        """
        Функция извлекает объект Technique на основе предоставленного первичного ключа (pk), если
        пользователь является менеджером, в противном случае она возвращает ответ 403 Forbidden.
        """
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Technique.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = TechniqueSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=403)

    def update(self, request, pk=None):
        """
        Эта функция обновляет объект Technique, если пользователь является менеджером, в противном случае
        она возвращает код состояния 403.
        """
        if request.user.is_authenticated:
            if request.user.is_manager:
                update = get_object_or_404(Technique.objects.all(), pk=pk)
                serializer = TechniqueSerializer(
                    update,
                    data=request.data,
                )
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=403)

    def destroy(self, request, pk=None):
        """
        Функция destroy удаляет объект Technique, если пользователь, сделавший запрос, является менеджером,
        в противном случае она возвращает ответ 403 Forbidden.
        """
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(Technique.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=403)


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


class CarsViewSet(viewsets.ViewSet):
    view_is_async = True

    def list(self, request):
        """
        Код возвращает объект Response с сериализованными данными. Сериализованные данные зависят от
        статуса и роли аутентификации пользователя. Если пользователь не прошел аутентификацию, код
        возвращает набор запросов всех объектов Cars. Если пользователь прошел проверку подлинности, код
        проверяет роль пользователя и возвращает набор запросов объектов Cars на основе роли пользователя
        (клиент, служба или менеджер).
        """
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
        return Response(status=401)

    def create(self, request):
        """
        Код возвращает объект Response. Если пользователь прошел проверку подлинности и является
        менеджером, он создает новый объект Cars и возвращает сериализованные данные созданного объекта.
        Если пользователь не аутентифицирован, он возвращает код состояния 401. Если пользователь прошел
        проверку подлинности, но не является менеджером, он возвращает код состояния 403.
        """
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
        """
        Код возвращает объект Response. Если пользователь аутентифицирован и имеет роль клиента, службы или
        менеджера, он извлекает объект автомобиля с указанным первичным ключом (pk) из модели Cars,
        сериализует его с помощью CarsSerializer и возвращает сериализованные данные в объекте Response.
        Если пользователь не аутентифицирован, он возвращает код состояния 401 Unauthorized.
        """
        if request.user.is_authenticated:
            if (
                request.user.is_client
                or request.user.is_service
                or request.user.is_manager
            ):
                queryset = Cars.objects.all()
                retrieve = get_object_or_404(queryset, pk=pk)
                serializer = CarsSerializer(retrieve)
                return Response(serializer.data)
            return Response(status=403)
        return Response(status=401)

    def update(self, request, pk=None):
        """
        Если пользователь прошел проверку подлинности и является менеджером, он вернет
        сериализованные данные обновленного объекта автомобиля, если сериализатор действителен. Если
        сериализатор недействителен, он вернет ошибки сериализатора со статусом HTTP 400 Bad Request. Если
        пользователь не является менеджером, он вернет объект Response со статусом 403 Forbidden.
        """
        if request.user.is_authenticated:
            if request.user.is_manager:
                queryset = Cars.objects.all()
                update = get_object_or_404(queryset, pk=pk)
                serializer = CarsSerializer(
                    update,
                    data=request.data,
                )
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(status=403)
        return Response(status=401)

    def destroy(self, request, pk=None):
        """
        Код возвращает объект Response с кодом состояния. Если пользователь прошел проверку подлинности и
        является менеджером, возвращается ответ с кодом состояния 204 (нет содержимого). Если пользователь
        прошел проверку подлинности, но не является менеджером, возвращается ответ с кодом состояния 403
        (запрещено). Если пользователь не аутентифицирован, будет получен ответ с кодом состояния 401.
        """
        if request.user.is_authenticated:
            if request.user.is_manager:
                delete = get_object_or_404(Cars.objects.all(), pk=pk)
                delete.delete()
                return Response(status=204)
            return Response(status=403)
        return Response(status=401)


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
