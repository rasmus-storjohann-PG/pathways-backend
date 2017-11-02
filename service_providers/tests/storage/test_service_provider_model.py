from django.test import TestCase
from service_providers import models
from decimal import *

class TestServiceProviderModel(TestCase):
    def test_can_create_service_provider(self):
        provider = models.ServiceProvider()
        provider.name = "The name"
        provider.latitude = 123.456
        provider.longitude = 123.456
        provider.save()
        provider_from_db = models.ServiceProvider.objects.get()
        self.assertEqual(provider_from_db.name, "The name")

    def test_has_latitude(self):
        provider = models.ServiceProvider()
        provider.latitude = 123.456
        provider.longitude = 123.456
        provider.save()
        provider_from_db = models.ServiceProvider.objects.get()
        self.assertEqual(provider_from_db.latitude, Decimal('123.456000'))
