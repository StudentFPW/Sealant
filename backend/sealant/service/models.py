from django.db import models


class Cars(models.Model):
    """
    Содержит информацию о характеристиках и комплектации проданных машин,
    а также информацию о месте эксплуатации.
    """

    factory_number = models.CharField(max_length=500, unique=True)
    vehicle_model = models.ForeignKey()
    engine_model = models.ForeignKey()
    engine_number = models.CharField(max_length=500)
    transmission_model = models.ForeignKey()
    transmission_number = models.CharField(max_length=500)
    drive_axle_model = models.ForeignKey()
    drive_axle_number = models.CharField(max_length=200)
    steering_axle_model = models.ForeignKey()
    steering_axle_number = models.CharField(max_length=500)
    supply_contract_date = models.CharField(max_length=500)
    shipped_from_factory = models.DateField()
    сonsignee = models.CharField(max_length=1000)
    delivery_address = models.CharField(max_length=1000)
    equipment = models.CharField(max_length=1000)
    client = models.ForeignKey()
    service_company = models.ForeignKey()


class To(models.Model):
    """
    Содержит информацию об истории проведения ТО каждой машины.

    Каждый объект ТО привязан к определённой Машине (см п.1 в сущности «Машина»).
    У каждой машины может быть несколько проведённых ТО.
    """

    type_of_maintenance = models.ForeignKey()
    maintenance_date = models.DateField()
    operating_hours = models.IntegerField()
    order_number = models.CharField(max_length=100)
    order_date = models.DateField()
    maintenance_company = models.ForeignKey()
    car = models.ManyToManyField()
    service_company = models.ForeignKey()


class Complaints(models.Model):
    """
    Содержит информацию о заявленных клиентами рекламациях, и сроках их устранения.
    """

    refusal_date = models.DateField()
    operating_hours = models.IntegerField()
    failure_node = models.ForeignKey()
    failure_description = models.TextField()
    recovery_method = models.ForeignKey()
    parts_used = models.CharField(max_length=1000)
    restore_date = models.DateField()
    equipment_downtime = models.IntegerField()
    car = models.ManyToManyField()
    service_company = models.ForeignKey()
