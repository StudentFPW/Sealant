from django.db import transaction

from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer


class CustomRegisterSerializer(RegisterSerializer):
    email = serializers.EmailField()

    @transaction.atomic
    def save(self, request):
        user = super().save(request)
        user.email = self.data.get("email")
        user.save()
