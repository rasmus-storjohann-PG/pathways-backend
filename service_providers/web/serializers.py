from rest_framework import serializers
from service_providers import models

class ServiceProviderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.ServiceProvider
        fields = ('pk', 'name', 'latitude', 'longitude', 'description')
