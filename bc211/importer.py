from bc211 import parser
from service_providers import models

def read_from_xml_and_save_to_database(path):
    xml = read_file(path)
    parsed_records = parser.parse_all_service_providers(xml)
    save_records(parsed_records)

def read_file(path):
    file_handle = open(path, 'r')
    return file_handle.read()

def save_records(records):
    for record in records:
        active_record = build_active_record(record)
        active_record.save()

def build_active_record(record):
    active_record = models.ServiceProvider()
    active_record.name = record.name
    active_record.latitude = record.latitude
    active_record.longitude = record.longitude
    active_record.description = record.description
    return active_record
