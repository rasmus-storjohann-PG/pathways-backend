from django.test import TestCase
from service_providers import models

class TestServiceProviderModel(TestCase):
    def test_can_create_service_provider(self):
        provider = models.ServiceProvider()
        provider.name = "The name"
        provider.save()
        provider_from_db = models.ServiceProvider.objects.get()
        self.assertEqual(provider_from_db.name, "The name")
