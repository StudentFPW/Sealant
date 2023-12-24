from django.core.management.base import BaseCommand
from users.models import User


class Command(BaseCommand):
    def handle(self, *args, **options):
        if User.objects.count() == 0:
            print("Creating account for admin")
            admin = User.objects.create_superuser(
                email="admin@email.com",
                username="admin",
                password="admin",
                first_name="admin",
            )
            admin.is_active = True
            admin.is_staff = True
            admin.is_admin = True
            admin.is_client = True
            admin.is_service = True
            admin.is_manager = True
            admin.save()
            print("Account created")
        else:
            print("Admin accounts can only be initialized if no Accounts exist")
