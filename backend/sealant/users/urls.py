from django.urls import path

from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView, UserDetailsView
from rest_framework_simplejwt.views import TokenVerifyView
from dj_rest_auth.jwt_auth import get_refresh_view

from .viewsets import (
    ClientRegistrationView,
    ServiceRegistrationView,
    ManagerRegistrationView,
)

# from .views import GoogleLogin

urlpatterns = [
    path("login/", LoginView.as_view(), name="rest_login"),
    path("logout/", LogoutView.as_view(), name="rest_logout"),
    path("user/", UserDetailsView.as_view(), name="rest_user_details"),
    path("token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("token/refresh/", get_refresh_view().as_view(), name="token_refresh"),
    path("register/", RegisterView.as_view(), name="rest_register"),
    path("register/client/", ClientRegistrationView.as_view(), name="register-client"),
    path(
        "register/service/", ServiceRegistrationView.as_view(), name="register-service"
    ),
    path(
        "register/manager/", ManagerRegistrationView.as_view(), name="register-manager"
    ),
    # path("google/", GoogleLogin.as_view(), name="google_login"),
]
