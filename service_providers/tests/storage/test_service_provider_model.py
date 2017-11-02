from decimal import Decimal
from django.test import TestCase
from service_providers import models

class TestServiceProviderModel(TestCase):
    def setUp(self):
        self.name = 'The service provider name'
        self.latitude = Decimal('123.456')
        self.longitude = Decimal('234.567')

        provider = models.ServiceProvider()
        provider.name = self.name
        provider.latitude = self.latitude
        provider.longitude = self.longitude
        provider.save()

        self.provider_from_db = models.ServiceProvider.objects.get()

    def test_has_name(self):
        self.assertEqual(self.provider_from_db.name, self.name)

    def test_has_latitude(self):
        self.assertEqual(self.provider_from_db.latitude, self.latitude)

    def test_has_longitude(self):
        self.assertEqual(self.provider_from_db.longitude, self.longitude)
