from decimal import Decimal
from django.test import TestCase
from django.db import utils as django_utils
from locations import models
from locations.tests.helpers import LocationBuilder
from organizations.tests.helpers import OrganizationBuilder

class TestLocationModel(TestCase):
    def setUp(self):
        self.organization = OrganizationBuilder().build()

    def test_has_name(self):
        name = 'The location name'
        location = LocationBuilder(self.organization).with_name(name).build()
        location.save()
        location_from_db = models.Location.objects.get()
        self.assertEqual(location_from_db.name, name)

    def test_has_latitude(self):
        latitude = Decimal('123.456')
        location = LocationBuilder(self.organization).with_latitude(latitude).build()
        location.save()
        location_from_db = models.Location.objects.get()
        self.assertEqual(location_from_db.latitude, latitude)

    def test_has_longitude(self):
        longitude = Decimal('234.567')
        location = LocationBuilder(self.organization).with_longitude(longitude).build()
        location.save()
        location_from_db = models.Location.objects.get()
        self.assertEqual(location_from_db.longitude, longitude)

    def test_can_set_description(self):
        description = 'The location description'
        location = LocationBuilder(self.organization).with_description(description).build()
        location.save()
        location_from_db = models.Location.objects.get()
        self.assertEqual(location_from_db.description, description)

    def test_description_can_be_empty(self):
        location = LocationBuilder(self.organization).with_description('').build()
        location.save()
        location_from_db = models.Location.objects.get()
        self.assertEqual(location_from_db.description, '')

    def test_description_is_required(self):
        location = LocationBuilder(self.organization).with_description(None).build()
        with self.assertRaises(django_utils.IntegrityError):
            location.save()

    def test_description_is_multilingual(self):
        location = LocationBuilder(self.organization).build()

        location.set_current_language('en')
        location.description = 'In English'
        location.set_current_language('fr')
        location.description = 'En français'
        location.save()

        location_from_db = models.Location.objects.get()

        location_from_db.set_current_language('en')
        self.assertEqual(location_from_db.description, 'In English')
        location_from_db.set_current_language('fr')
        self.assertEqual(location_from_db.description, 'En français')
