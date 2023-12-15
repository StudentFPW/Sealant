from rest_framework import serializers

from .models import (
    Technique,
    Engine,
    Transmission,
    Axle,
    SteeringAxle,
    TypeTo,
    Failure,
    RecoveryMethod,
    Cars,
    To,
    Complaints,
)


class TechniqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technique
        fields = "__all__"


class EngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Engine
        fields = "__all__"


class TransmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transmission
        fields = "__all__"


class AxleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Axle
        fields = "__all__"


class SteeringAxleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SteeringAxle
        fields = "__all__"


class TypeToSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeTo
        fields = "__all__"


class FailureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Failure
        fields = "__all__"


class RecoveryMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecoveryMethod
        fields = "__all__"


class CarsSerializer(serializers.ModelSerializer):
    vehicle_model = TechniqueSerializer(read_only=True)
    engine_model = EngineSerializer(read_only=True)
    transmission_model = TransmissionSerializer(read_only=True)
    drive_axle_model = AxleSerializer(read_only=True)
    steering_axle_model = SteeringAxleSerializer(read_only=True)

    # service_company =
    # client =
    class Meta:
        model = Cars
        fields = "__all__"


class ToSerializer(serializers.ModelSerializer):
    type_of_maintenance = TypeToSerializer(read_only=True)
    car = CarsSerializer(read_only=True)

    # maintenance_company =
    # service_company =
    class Meta:
        model = To
        fields = "__all__"


class ComplaintsSerializer(serializers.ModelSerializer):
    failure_node = FailureSerializer(read_only=True)
    recovery_method = RecoveryMethodSerializer(read_only=True)
    car = CarsSerializer(read_only=True)

    # service_company =
    class Meta:
        model = Complaints
        fields = "__all__"
