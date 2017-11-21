import xml.etree.ElementTree as etree
from bc211 import models

def parse_all_service_providers(xml_data_as_string):
    root_xml = etree.fromstring(xml_data_as_string)
    all_providers_xml = root_xml.findall('Agency')
    return map(parse_one_service_provider, all_providers_xml)

def parse_one_service_provider(provider_xml):
    name = parse_name(provider_xml)
    description = parse_description(provider_xml)
    spatial_location = parse_spatial_location_if_defined(provider_xml)
    return models.ServiceProvider(name, description, spatial_location)

def parse_name(provider_xml):
    return provider_xml.find('Name').text

def parse_description(provider_xml):
    return provider_xml.find('AgencyDescription').text

def parse_spatial_location_if_defined(provider_xml):
    latitude = provider_xml.find('./Site/SpatialLocation/Latitude')
    longitude = provider_xml.find('./Site/SpatialLocation/Longitude')
    if latitude is None or longitude is None:
        return None
    return models.SpatialLocation(latitude.text, longitude.text)
