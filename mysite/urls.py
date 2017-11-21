from django.conf.urls import url, include
from django.contrib import admin
from organizations import viewsets as organizations_viewsets
from locations import viewsets as locations_viewsets
from rest_framework import routers

def build_router():
    router = routers.DefaultRouter()
    router.register(r'^organizations', organizations_viewsets.OrganizationViewSet)
    router.register(r'^locations', locations_viewsets.LocationViewSet)
    return router

# pylint: disable=invalid-name
urlpatterns = [
    url(r'^v1/', include(build_router().urls)),
    url(r'^admin/', admin.site.urls),
    url(r'^v0/forms/polls/', include('polls.web.urls')),
    url(r'^v0/polls/', include('polls.web.api')),
]
