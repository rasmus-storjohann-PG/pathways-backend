from bc211 import parser
from service_providers import models
from django.utils import translation

def read_records_from_file(path):
    xml = read_file(path)
    return parser.parse_all_service_providers(xml)

def read_file(path):
    file_handle = open(path, 'r')
    return file_handle.read()

def save_records_to_database(records):
    translation.activate('en')
    save_records(records)

def save_records(records):
    for record in records:
        active_record = build_active_record(record)
        active_record.save()

def build_active_record(record):
    active_record = models.ServiceProvider()
    active_record.name = record.name
    has_location = record.spatial_location is not None
    active_record.latitude = record.spatial_location.latitude if has_location else None
    active_record.longitude = record.spatial_location.longitude if has_location else None
    active_record.description = record.description
    return active_record
