from dj_rest_auth.registration.views import RegisterView

from .models import Client, Service, Manager
from .serializers import (
    ClientCustomRegistrationSerializer,
    ServiceCustomRegistrationSerializer,
    ManagerCustomRegistrationSerializer,
)


class ClientRegistrationViewSet(RegisterView):
    """
    Класс ClientRegistrationViewSet — это набор представлений для регистрации клиентов с помощью
    пользовательского сериализатора регистрации.
    """

    queryset = Client.objects.all()
    serializer_class = ClientCustomRegistrationSerializer


class ServiceRegistrationViewSet(RegisterView):
    queryset = Service.objects.all()
    serializer_class = ServiceCustomRegistrationSerializer


class ManagerRegistrationViewSet(RegisterView):
    queryset = Manager.objects.all()
    serializer_class = ManagerCustomRegistrationSerializer
