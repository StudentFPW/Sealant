from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer

from .models import User, Client, Service, Manager


class ClientCustomRegistrationSerializer(RegisterSerializer):
    """
    Класс ClientCustomRegistrationSerializer — это специальный
    сериализатор для регистрации пользователя клиента, который
    устанавливает флаг is_client в значение True и создает
    соответствующий объект Client.
    """

    client = serializers.PrimaryKeyRelatedField(
        read_only=True,
    )

    def save(self, request):
        user = super(ClientCustomRegistrationSerializer, self).save(request)
        user.is_client = True
        user.save()
        client = Client(
            client=user,
        )
        client.save()
        return user


class ServiceCustomRegistrationSerializer(RegisterSerializer):
    service = serializers.PrimaryKeyRelatedField(
        read_only=True,
    )

    def save(self, request):
        user = super(ServiceCustomRegistrationSerializer, self).save(request)
        user.is_service = True
        user.save()
        service = Service(
            service=user,
        )
        service.save()
        return user


class ManagerCustomRegistrationSerializer(RegisterSerializer):
    manager = serializers.PrimaryKeyRelatedField(
        read_only=True,
    )

    def save(self, request):
        user = super(ManagerCustomRegistrationSerializer, self).save(request)
        user.is_manager = True
        user.save()
        manager = Manager(
            manager=user,
        )
        manager.save()
        return user
