from django.urls import path

from dj_rest_auth.views import LoginView, LogoutView, UserDetailsView
from rest_framework_simplejwt.views import TokenVerifyView
from dj_rest_auth.jwt_auth import get_refresh_view

from .viewsets import (
    ClientRegistrationViewSet as client,
    ServiceRegistrationViewSet as service,
    ManagerRegistrationViewSet as manager,
    ClientViewSet,
    ServiceViewSet,
    ManagerViewSet,
    UserViewSet,
)

urlpatterns = [
    path("reg/client/", client.as_view(), name="reg-client"),
    path("reg/service/", service.as_view(), name="reg-service"),
    path("reg/manager/", manager.as_view(), name="reg-manager"),
    path("list/client/", ClientViewSet.as_view({"get": "list"}), name="list-client"),
    path("list/service/", ServiceViewSet.as_view({"get": "list"}), name="list-service"),
    path("list/manager/", ManagerViewSet.as_view({"get": "list"}), name="list-manager"),
    path("user/", UserViewSet.as_view({"get": "list"}), name="user_list"),
    path("login/", LoginView.as_view(), name="rest_login"),
    path("logout/", LogoutView.as_view(), name="rest_logout"),
    path("token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("token/refresh/", get_refresh_view().as_view(), name="token_refresh"),
]
