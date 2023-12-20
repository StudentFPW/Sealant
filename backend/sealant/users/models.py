from django.contrib.auth.models import AbstractUser
from django.db import models

from django.conf import settings

# Принцип авторизации:
#       Король является администратором
#       Рыцарь является менеджером

# Администратор посвящает менеджера в рыцари

# PS. users.viewsets.py


class User(AbstractUser):
    is_client = models.BooleanField(default=False)
    is_service = models.BooleanField(default=False)
    is_manager = models.BooleanField(default=False)
    company = models.CharField(max_length=100, default="", blank=True)
    foto = models.ImageField(upload_to="profile/foto/", blank=True)
    website = models.URLField(max_length=200, blank=True)

    def __str__(self):
        return f"Username: {self.username}, Email: {self.email}, Name: {self.first_name if self.first_name else 'not registered'}"


class Client(models.Model):
    client = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.client.username


class Service(models.Model):
    service = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.service.username


class Manager(models.Model):
    manager = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.manager.username
