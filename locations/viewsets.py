from rest_framework import viewsets
from locations import models, serializers

class LocationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Location.objects.all()
    serializer_class = serializers.LocationSerializer
