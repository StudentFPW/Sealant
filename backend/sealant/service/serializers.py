from rest_framework import serializers

from .models import (
    ServiceCompany,
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


class ServiceCompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ServiceCompany
        fields = "__all__"


class TechniqueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Technique
        fields = "__all__"


class EngineSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Engine
        fields = "__all__"


class TransmissionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Transmission
        fields = "__all__"


class AxleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Axle
        fields = "__all__"


class SteeringAxleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SteeringAxle
        fields = "__all__"


class TypeToSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TypeTo
        fields = "__all__"


class FailureSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Failure
        fields = "__all__"


class RecoveryMethodSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RecoveryMethod
        fields = "__all__"


class CarsSerializer(serializers.HyperlinkedModelSerializer):
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


class ToSerializer(serializers.HyperlinkedModelSerializer):
    type_of_maintenance = TypeToSerializer(read_only=True)
    car = CarsSerializer(read_only=True)

    class Meta:
        model = To
        fields = "__all__"


class ComplaintsSerializer(serializers.HyperlinkedModelSerializer):
    failure_node = FailureSerializer(read_only=True)
    recovery_method = RecoveryMethodSerializer(read_only=True)
    car = CarsSerializer(read_only=True)

    class Meta:
        model = Complaints
        fields = "__all__"
