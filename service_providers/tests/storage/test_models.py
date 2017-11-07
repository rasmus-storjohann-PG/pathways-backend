from decimal import Decimal
from django.test import TestCase
from django.db import utils as django_utils
from service_providers import models
from service_providers.tests.helpers import ServiceProviderBuilder

class TestServiceProviderModel(TestCase):
    def test_has_name(self):
        name = 'The service provider name'
        provider = ServiceProviderBuilder().with_name(name).build()
        provider.save()
        provider_from_db = models.ServiceProvider.objects.get()
        self.assertEqual(provider_from_db.name, name)

    def test_has_latitude(self):
        latitude = Decimal('123.456')
        provider = ServiceProviderBuilder().with_latitude(latitude).build()
        provider.save()
        provider_from_db = models.ServiceProvider.objects.get()
        self.assertEqual(provider_from_db.latitude, latitude)

    def test_has_longitude(self):
        longitude = Decimal('234.567')
        provider = ServiceProviderBuilder().with_longitude(longitude).build()
        provider.save()
        provider_from_db = models.ServiceProvider.objects.get()
        self.assertEqual(provider_from_db.longitude, longitude)

    def test_can_set_description(self):
        description = 'The service provider description'
        provider = ServiceProviderBuilder().with_description(description).build()
        provider.save()
        provider_from_db = models.ServiceProvider.objects.get()
        self.assertEqual(provider_from_db.description, description)

    def test_description_can_be_empty(self):
        provider = ServiceProviderBuilder().with_description('').build()
        provider.save()
        provider_from_db = models.ServiceProvider.objects.get()
        self.assertEqual(provider_from_db.description, '')

    def test_description_is_required(self):
        provider = ServiceProviderBuilder().with_description(None).build()
        with self.assertRaises(django_utils.IntegrityError):
            provider.save()

    def test_description_is_multilingual(self):
        provider = ServiceProviderBuilder().build()

        provider.set_current_language('en')
        provider.description = 'In English'
        provider.set_current_language('fr')
        provider.description = 'En français'
        provider.save()

        provider_from_db = models.ServiceProvider.objects.get()

        provider_from_db.set_current_language('en')
        self.assertEqual(provider_from_db.description, 'In English')
        provider_from_db.set_current_language('fr')
        self.assertEqual(provider_from_db.description, 'En français')
