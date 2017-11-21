import unittest
import xml.etree.ElementTree as etree
from bc211 import parser

ONE_AGENCY_FIXTURE = 'bc211/data/BC211_data_one_agency.xml'
MULTI_AGENCY_FIXTURE = 'bc211/data/BC211_data_excerpt.xml'

class TestParsingOfOneServiceProviderRecord(unittest.TestCase):
    def setUp(self):
        file_open_for_reading = open(ONE_AGENCY_FIXTURE, 'r')
        xml = file_open_for_reading.read()
        root = etree.fromstring(xml)
        provider = root.find('Agency')
        self.service_provider = parser.parse_one_service_provider(provider)

    def test_can_parse_name(self):
        self.assertEqual(self.service_provider.name, 'Langley Child Development Centre')

    def test_can_parse_description(self):
        self.assertEqual(self.service_provider.description[:30], 'Provides inclusive, family-cen')

    def test_can_parse_latitude(self):
        self.assertAlmostEqual(self.service_provider.spatial_location.latitude, 49.087284)

    def test_can_parse_longitude(self):
        self.assertAlmostEqual(self.service_provider.spatial_location.longitude, -122.607918)

class TestParsingOfMultipleServiceProviderRecord(unittest.TestCase):
    def test_parse_many_service_providers(self):
        file_open_for_reading = open(MULTI_AGENCY_FIXTURE, 'r')
        xml = file_open_for_reading.read()
        all_service_providers = parser.parse_all_service_providers(xml)
        self.assertEqual(len(list(all_service_providers)), 16)
