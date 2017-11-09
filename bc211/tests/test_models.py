import unittest
from bc211 import models, exceptions

class TestSpatialLocation(unittest.TestCase):
    def test_can_create(self):
        location = models.SpatialLocation('123.456', '-23.456')
        self.assertAlmostEqual(location.latitude, 123.456)
        self.assertAlmostEqual(location.longitude, -23.456)

    def test_throws_on_latitude_not_a_number(self):
        with self.assertRaises(exceptions.InvalidFloatXmlParseException):
            models.SpatialLocation('foo', '-23.456')

    def test_throws_on_longitude_not_a_number(self):
        with self.assertRaises(exceptions.InvalidFloatXmlParseException):
            models.SpatialLocation('123.456', 'foo')

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
        self.assertAlmostEqual(service_provider.spatial_location.latitude, 123.456)

    def test_can_set_longitude(self):
        location = models.SpatialLocation('123.456', '-23.456')
        service_provider = models.ServiceProvider('Name', 'Description', location)
        self.assertAlmostEqual(service_provider.spatial_location.longitude, -23.456)

    def test_location_can_be_none(self):
        location = None
        service_provider = models.ServiceProvider('Name', 'Description', location)
        self.assertEqual(service_provider.spatial_location, None)
