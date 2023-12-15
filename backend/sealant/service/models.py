from django.db import models

from users.models import Client, Service


class Technique(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)

    def __str__(self) -> str:
        return f"Name :{self.name}"


class Engine(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)

    def __str__(self) -> str:
        return f"Name :{self.name}"


class Transmission(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)

    def __str__(self) -> str:
        return f"Name :{self.name}"


class Axle(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)

    def __str__(self) -> str:
        return f"Name :{self.name}"


class SteeringAxle(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)

    def __str__(self) -> str:
        return f"Name :{self.name}"


class TypeTo(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)

    def __str__(self) -> str:
        return f"Name :{self.name}"


class Failure(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)

    def __str__(self) -> str:
        return f"Name :{self.name}"


class RecoveryMethod(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)

    def __str__(self) -> str:
        return f"Name :{self.name}"


class Cars(models.Model):
    """
    Содержит информацию о характеристиках и комплектации проданных машин,
    а также информацию о месте эксплуатации.
    """

    vehicle_model = models.ForeignKey(
        Technique,
        on_delete=models.CASCADE,
        related_name="TechniqueCars",
    )
    engine_model = models.ForeignKey(
        Engine,
        on_delete=models.CASCADE,
        related_name="EngineCars",
    )
    transmission_model = models.ForeignKey(
        Transmission,
        on_delete=models.CASCADE,
        related_name="TransmissionCars",
    )
    drive_axle_model = models.ForeignKey(
        Axle,
        on_delete=models.CASCADE,
        related_name="AxleCars",
    )
    steering_axle_model = models.ForeignKey(
        SteeringAxle,
        on_delete=models.CASCADE,
        related_name="SteeringAxleCars",
    )
    service_company = models.ForeignKey(
        Service,
        on_delete=models.CASCADE,
        related_name="ServiceCompanyCars",
    )
    client = models.ForeignKey(
        Client,
        on_delete=models.CASCADE,
        related_name="ClientCars",
    )

    сonsignee = models.CharField(max_length=1000)
    engine_number = models.CharField(max_length=500)
    drive_axle_number = models.CharField(max_length=500)
    delivery_address = models.CharField(max_length=1000)
    transmission_number = models.CharField(max_length=500)
    steering_axle_number = models.CharField(max_length=500)
    factory_number = models.CharField(max_length=500, unique=True)

    equipment = models.TextField()

    supply_contract_date = models.DateField()
    shipped_from_factory = models.DateField()

    def __str__(self):
        return f"Veicle model:{self.vehicle_model.name}, Engine model:{self.engine_model.name}"


class To(models.Model):
    """
    Содержит информацию об истории проведения ТО каждой машины.

    Каждый объект ТО привязан к определённой Машине (см п.1 в сущности «Машина»).
    У каждой машины может быть несколько проведённых ТО.
    """

    type_of_maintenance = models.ForeignKey(
        TypeTo,
        on_delete=models.CASCADE,
        related_name="MaintenanceTo",
    )
    maintenance_company = models.ForeignKey(
        Service,
        on_delete=models.CASCADE,
        related_name="MaintenanceCompanyTo",
    )
    service_company = models.ForeignKey(
        Service,
        on_delete=models.CASCADE,
        related_name="ServiceCompanyTo",
    )
    car = models.ManyToManyField(
        Cars,
        related_name="CarTo",
    )

    order_number = models.CharField(max_length=1000)

    maintenance_date = models.DateField()
    order_date = models.DateField()

    operating_hours = models.IntegerField()

    def __str__(self):
        return f"Date: {self.maintenance_date}"


class Complaints(models.Model):
    """
    Содержит информацию о заявленных клиентами рекламациях, и сроках их устранения.
    """

    failure_node = models.ForeignKey(
        Failure,
        on_delete=models.CASCADE,
        related_name="FailuresComplaints",
    )
    recovery_method = models.ForeignKey(
        RecoveryMethod,
        on_delete=models.CASCADE,
        related_name="RecoveryMethodsComplaints",
    )
    service_company = models.ForeignKey(
        Service,
        on_delete=models.CASCADE,
        related_name="ServiceCompanyComplaints",
    )
    car = models.ManyToManyField(
        Cars,
        related_name="CarComplaints",
    )

    parts_used = models.CharField(max_length=1000)
    failure_description = models.TextField()

    refusal_date = models.DateField()
    restore_date = models.DateField()

    operating_hours = models.IntegerField()
    equipment_downtime = models.IntegerField()

    def __str__(self):
        return f"Failure description: {self.failure_description.split()[:5]}..."
