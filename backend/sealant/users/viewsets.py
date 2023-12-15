from dj_rest_auth.registration.views import RegisterView

from .serializers import (
    ClientCustomRegistrationSerializer,
    ServiceCustomRegistrationSerializer,
    ManagerCustomRegistrationSerializer,
)


class ClientRegistrationViewSet(RegisterView):
    serializer_class = ClientCustomRegistrationSerializer


class ServiceRegistrationViewSet(RegisterView):
    serializer_class = ServiceCustomRegistrationSerializer


class ManagerRegistrationViewSet(RegisterView):
    serializer_class = ManagerCustomRegistrationSerializer
