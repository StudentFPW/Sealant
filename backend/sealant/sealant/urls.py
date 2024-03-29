"""
URL configuration for sealant project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Sealant API",
        default_version="v1",
        description="General API documentation",
        terms_of_service="https://github.com/StudentFPW/Sealant#readme",
        contact=openapi.Contact(email="jofeleonids00@gmail.com"),
        license=openapi.License(name="License"),
    ),
    public=True,
    permission_classes=(permissions.IsAdminUser,),
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/", include("service.urls")),
    path("api/v1/", include("users.urls")),
    path(
        "api/auth/rest/",
        include("rest_framework.urls", namespace="rest_framework"),
    ),
    path(
        "api/v1/swagger<format>/",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json-or-yaml",
    ),
    path(
        "api/v1/swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path(
        "api/v1/redoc/",
        schema_view.with_ui("redoc", cache_timeout=0),
        name="schema-redoc",
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Swagger exposes 4 endpoints:
#       A JSON view of your API specification at /swagger.json
#       A YAML view of your API specification at /swagger.yaml
#       A swagger-ui view of your API specification at /swagger/
#       A ReDoc view of your API specification at /redoc/
