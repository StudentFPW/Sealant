from dj_rest_auth.registration.views import RegisterView

from .serializers import (
    ClientCustomRegistrationSerializer,
    ServiceCustomRegistrationSerializer,
    ManagerCustomRegistrationSerializer,
)


class ClientRegistrationView(RegisterView):
    """
    Класс ClientRegistrationView расширяет
    класс RegisterView и использует класс
    сериализатора ClientCustomRegistrationSerializer.
    """

    serializer_class = ClientCustomRegistrationSerializer


class ServiceRegistrationView(RegisterView):
    serializer_class = ServiceCustomRegistrationSerializer


class ManagerRegistrationView(RegisterView):
    serializer_class = ManagerCustomRegistrationSerializer
