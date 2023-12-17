from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer

from .models import Client, Service, Manager


class ClientCustomRegistrationSerializer(RegisterSerializer):
    """
    Класс ClientCustomRegistrationSerializer — это специальный сериализатор для регистрации клиента,
    который расширяет класс RegisterSerializer и добавляет дополнительные поля и логику для сохранения
    пользователя и создания связанного объекта клиента.
    """

    client = serializers.PrimaryKeyRelatedField(
        read_only=True,
    )
    first_name = serializers.CharField()
    last_name = serializers.CharField(required=False)
    company = serializers.CharField()
    website = serializers.URLField(required=False)
    foto = serializers.ImageField(required=False)

    def save(self, request):
        user = super(ClientCustomRegistrationSerializer, self).save(request)
        user.is_client = True
        user.first_name = self.data.get("first_name")
        user.company = self.data.get("company")
        if self.data.get("last_name"):
            user.last_name = self.data.get("last_name")
        if self.data.get("website"):
            user.website = self.data.get("website")
        if self.data.get("foto"):
            user.foto = self.data.get("foto")
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
    first_name = serializers.CharField()
    last_name = serializers.CharField(required=False)
    company = serializers.CharField()
    website = serializers.URLField(required=False)
    foto = serializers.ImageField(required=False)

    def save(self, request):
        user = super(ServiceCustomRegistrationSerializer, self).save(request)
        user.is_service = True
        user.first_name = self.data.get("first_name")
        user.company = self.data.get("company")
        if self.data.get("last_name"):
            user.last_name = self.data.get("last_name")
        if self.data.get("website"):
            user.website = self.data.get("website")
        if self.data.get("foto"):
            user.foto = self.data.get("foto")
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
    first_name = serializers.CharField()
    last_name = serializers.CharField(required=False)
    company = serializers.CharField()
    website = serializers.URLField(required=False)
    foto = serializers.ImageField(required=False)

    def save(self, request):
        user = super(ManagerCustomRegistrationSerializer, self).save(request)
        user.is_manager = True
        user.first_name = self.data.get("first_name")
        user.company = self.data.get("company")
        if self.data.get("last_name"):
            user.last_name = self.data.get("last_name")
        if self.data.get("website"):
            user.website = self.data.get("website")
        if self.data.get("foto"):
            user.foto = self.data.get("foto")
        user.save()
        manager = Manager(
            manager=user,
        )
        manager.save()
        return user


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = "__all__"


class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manager
        fields = "__all__"
