from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer

from .models import User, Client, Service, Manager


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
        user.is_staff = True  # Для класса IsAdminUser
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


class UserDetailsSerializer(serializers.ModelSerializer):
    """
    Класс UserDetailsSerializer — это сериализатор модели User,
    который включает в себя различные поля для сведений о пользователе.
    """

    class Meta:
        model = User
        fields = (
            "id",
            "is_superuser",
            "is_staff",
            "is_active",
            "date_joined",
            "is_client",
            "is_service",
            "is_manager",
            "foto",
            "website",
            "username",
            "email",
            "first_name",
            "last_name",
            "company",
        )


class ServiceSerializer(serializers.ModelSerializer):
    """
    Класс ServiceSerializer — это сериализатор, который сериализует модель службы и включает
    UserDetailsSerializer в качестве вложенного сериализатора для поля «служба».
    """

    service = UserDetailsSerializer(read_only=True)

    class Meta:
        model = Service
        fields = "__all__"


class ClientSerializer(serializers.ModelSerializer):
    client = UserDetailsSerializer(read_only=True)

    class Meta:
        model = Client
        fields = "__all__"


class ManagerSerializer(serializers.ModelSerializer):
    manager = UserDetailsSerializer(read_only=True)

    class Meta:
        model = Manager
        fields = "__all__"
