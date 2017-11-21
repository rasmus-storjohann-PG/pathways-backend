from bc211 import parser
from service_providers import models
from django.utils import translation

def read_records_from_file(file):
    xml = file.read()
    return parser.parse_all_service_providers(xml)

def save_records_to_database(records):
    translation.activate('en')
    return save_records(records)

def save_records(records):
    count = 0
    for record in records:
        active_record = build_active_record(record)
        active_record.save()
        count += 1
    return count

def build_active_record(record):
    active_record = models.ServiceProvider()
    active_record.name = record.name
    has_location = record.spatial_location is not None
    active_record.latitude = record.spatial_location.latitude if has_location else None
    active_record.longitude = record.spatial_location.longitude if has_location else None
    active_record.description = record.description
    return active_record
