import unittest
from decimal import Decimal
from django.test import TestCase
from bc211.importer import read_records_from_file, save_records_to_database
from service_providers import models

ONE_AGENCY_FIXTURE = 'bc211/data/BC211_data_one_agency.xml'
MULTI_AGENCY_FIXTURE = 'bc211/data/BC211_data_excerpt.xml'

class DataImporterTestsForSingleRecord(TestCase):
    def setUp(self):
        save_records_to_database(read_records_from_file(ONE_AGENCY_FIXTURE))
        all_records = models.ServiceProvider.objects.all()
        self.record = all_records[0]

    def test_can_import_name(self):
        self.assertEqual(self.record.name, 'Langley Child Development Centre')

    def test_can_import_description(self):
        self.assertEqual(self.record.description[:30], 'Provides inclusive, family-cen')

    def test_can_import_latitude(self):
        self.assertEqual(self.record.latitude, Decimal('49.087284'))

    def test_can_import_longitude(self):
        self.assertEqual(self.record.longitude, Decimal('-122.607918'))

class DataImporterTestsForMultipleRecord(TestCase):
    def test_can_import_multiple_records(self):
        save_records_to_database(read_records_from_file(MULTI_AGENCY_FIXTURE))
        all_records = models.ServiceProvider.objects.all()
        self.assertEqual(len(all_records), 16)
