from rest_framework import viewsets
from service_providers import models
from service_providers import serializers

class ServiceProviderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.ServiceProvider.objects.all()
    serializer_class = serializers.ServiceProviderSerializer
