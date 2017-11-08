import xml.etree.ElementTree as etree
from bc211 import models

def parse_all_service_providers(xml_data_as_string):
    root_xml = etree.fromstring(xml_data_as_string)
    all_providers_xml = root_xml.findall('Agency')
    return list(map(parse_one_service_provider, all_providers_xml))

def parse_one_service_provider(provider_xml):
    name = provider_xml.find('Name').text
    description = provider_xml.find('AgencyDescription').text
    spatial_location = build_spatial_location(provider_xml)
    return models.ServiceProvider(name, description, spatial_location)

def build_spatial_location(provider_xml):
    latitude, longitude = get_latitude_and_longitude(provider_xml)
    if latitude is None or longitude is None:
        return None
    return models.SpatialLocation(latitude.text, longitude.text)

def get_latitude_and_longitude(provider_xml):
    spatial_location = get_spatial_location(provider_xml)
    if spatial_location is None:
        return None, None
    latitude = spatial_location.find('Latitude')
    longitude = spatial_location.find('Longitude')
    return latitude, longitude

def get_spatial_location(provider_xml):
    site = provider_xml.find('Site')
    if site is None:
        return None
    return site.find('SpatialLocation')
