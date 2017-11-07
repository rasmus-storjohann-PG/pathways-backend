from rest_framework import routers
from django.conf.urls import url, include
from service_providers import viewsets

def build_urlpatterns():
    router = routers.DefaultRouter()
    router.register(r'^', viewsets.ServiceProviderViewSet)
    return [url(r'^', include(router.urls))]

# pylint: disable=invalid-name
urlpatterns = build_urlpatterns()
