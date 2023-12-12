# Generated by Django 4.2.8 on 2023-12-12 17:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Axle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Cars',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('сonsignee', models.CharField(max_length=1000)),
                ('engine_number', models.CharField(max_length=500)),
                ('drive_axle_number', models.CharField(max_length=500)),
                ('delivery_address', models.CharField(max_length=1000)),
                ('transmission_number', models.CharField(max_length=500)),
                ('steering_axle_number', models.CharField(max_length=500)),
                ('factory_number', models.CharField(max_length=500, unique=True)),
                ('equipment', models.TextField()),
                ('supply_contract_date', models.DateField()),
                ('shipped_from_factory', models.DateField()),
                ('drive_axle_model', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='AxleCars', to='service.axle')),
            ],
        ),
        migrations.CreateModel(
            name='Engine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Failure',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='RecoveryMethod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='ServiceCompany',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='SteeringAxle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Technique',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Transmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='TypeTo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='To',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_number', models.CharField(max_length=1000)),
                ('maintenance_date', models.DateField()),
                ('order_date', models.DateField()),
                ('operating_hours', models.IntegerField()),
                ('car', models.ManyToManyField(related_name='CarTo', to='service.cars')),
                ('maintenance_company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='MaintenanceCompanyTo', to='service.servicecompany')),
                ('service_company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ServiceCompanyTo', to='service.servicecompany')),
                ('type_of_maintenance', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='MaintenanceTo', to='service.typeto')),
            ],
        ),
        migrations.CreateModel(
            name='Complaints',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('parts_used', models.CharField(max_length=1000)),
                ('failure_description', models.TextField()),
                ('refusal_date', models.DateField()),
                ('restore_date', models.DateField()),
                ('operating_hours', models.IntegerField()),
                ('equipment_downtime', models.IntegerField()),
                ('car', models.ManyToManyField(related_name='CarComplaints', to='service.cars')),
                ('failure_node', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='FailuresComplaints', to='service.failure')),
                ('recovery_method', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='RecoveryMethodsComplaints', to='service.recoverymethod')),
                ('service_company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ServiceCompanyComplaints', to='service.servicecompany')),
            ],
        ),
        migrations.AddField(
            model_name='cars',
            name='engine_model',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='EngineCars', to='service.engine'),
        ),
        migrations.AddField(
            model_name='cars',
            name='service_company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ServiceCompanyCars', to='service.servicecompany'),
        ),
        migrations.AddField(
            model_name='cars',
            name='steering_axle_model',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SteeringAxleCars', to='service.steeringaxle'),
        ),
        migrations.AddField(
            model_name='cars',
            name='transmission_model',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='TransmissionCars', to='service.transmission'),
        ),
        migrations.AddField(
            model_name='cars',
            name='vehicle_model',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='TechniqueCars', to='service.technique'),
        ),
    ]
