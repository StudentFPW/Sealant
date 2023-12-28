# from django.core.management.base import BaseCommand
# from users.models import User, Client, Service, Manager


# class Command(BaseCommand):  # FIXME: This isn't working properly
#     def handle(self, *args, **options):
#         print("Creating accounts for client, service and manager")
#         user_c = User.objects.create(
#             email="client@email.com",
#             username="client",
#             password="84t57nv57dffrr34",
#             first_name="John",
#             company="Google",
#         )
#         user_s = User.objects.create(
#             email="service@email.com",
#             username="service",
#             password="84t57nv57dffrr34",
#             first_name="Smith",
#             company="Tesla",
#         )
#         user_m = User.objects.create(
#             email="manager@email.com",
#             username="manager",
#             password="84t57nv57dffrr34",
#             first_name="Elvis",
#             company="Yandex",
#         )
#         user_c.is_client = True
#         user_s.is_service = True
#         user_m.is_manager = True
#         user_m.is_staff = True

#         user_c.save()
#         user_s.save()
#         user_m.save()

#         client = Client(client=user_c)
#         service = Service(service=user_s)
#         manager = Manager(manager=user_m)

#         client.save()
#         service.save()
#         manager.save()

#         print("Accounts created")
