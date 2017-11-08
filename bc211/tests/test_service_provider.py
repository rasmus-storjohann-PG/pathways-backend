import unittest
from bc211 import models

class TestServiceProvider(unittest.TestCase):
    def test_can_set_name(self):
        location = models.SpatialLocation('123.456', '-23.456')
        service_provider = models.ServiceProvider('Name', 'Description', location)
        self.assertEqual(service_provider.name, 'Name')

    def test_can_set_description(self):
        location = models.SpatialLocation('123.456', '-23.456')
        service_provider = models.ServiceProvider('Name', 'Description', location)
        self.assertEqual(service_provider.description, 'Description')

    def test_can_set_latitude(self):
        location = models.SpatialLocation('123.456', '-23.456')
        service_provider = models.ServiceProvider('Name', 'Description', location)
        self.assertAlmostEqual(service_provider.latitude, 123.456)

    def test_can_set_longitude(self):
        location = models.SpatialLocation('123.456', '-23.456')
        service_provider = models.ServiceProvider('Name', 'Description', location)
        self.assertAlmostEqual(service_provider.longitude, -23.456)

    def test_location_can_be_none(self):
        location = None
        service_provider = models.ServiceProvider('Name', 'Description', location)
        self.assertEqual(service_provider.latitude, None)
        self.assertEqual(service_provider.longitude, None)
