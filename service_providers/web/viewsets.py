from rest_framework import viewsets
from service_providers import models
from service_providers.web import serializers

class ServiceProviderViewSet(viewsets.ModelViewSet):
    queryset = models.ServiceProvider.objects.all()
    serializer_class = serializers.ServiceProviderSerializer
