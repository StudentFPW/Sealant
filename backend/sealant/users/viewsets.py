from dj_rest_auth.registration.views import RegisterView
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from .models import User, Client, Service, Manager
from .serializers import (
    ClientCustomRegistrationSerializer,
    ServiceCustomRegistrationSerializer,
    ManagerCustomRegistrationSerializer,
    UserDetailsSerializer,
)

# Класс разрешений IsAdminUser будет отказывать в разрешении любому пользователю,
# если только user.is_staff не является True, и в этом случае разрешение будет разрешено.

# Это разрешение подходит, если вы хотите, чтобы ваш API был доступен только
# ограниченному кругу доверенных администраторов.

# PS. users.serializers.py class ManagerCustomRegistrationSerializer


class ClientRegistrationViewSet(RegisterView):
    permission_classes = [IsAdminUser]
    queryset = Client.objects.all()
    serializer_class = ClientCustomRegistrationSerializer


class ServiceRegistrationViewSet(RegisterView):
    permission_classes = [IsAdminUser]
    queryset = Service.objects.all()
    serializer_class = ServiceCustomRegistrationSerializer


class ManagerRegistrationViewSet(RegisterView):
    permission_classes = [IsAdminUser]
    queryset = Manager.objects.all()
    serializer_class = ManagerCustomRegistrationSerializer


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = UserDetailsSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)
