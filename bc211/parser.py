import xml.etree.ElementTree as etree
from bc211 import models

def parse(xml_data_as_string):
    root_xml = etree.fromstring(xml_data_as_string)
    all_providers_xml = root_xml.findall('Agency')
    result = models.ParserResult()
    result.service_providers = map(parse_one_service_provider, all_providers_xml)
    result.organizations = map(parse_one_organization, all_providers_xml)
    return result

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

def parse_one_organization(agency_xml):
    id = agency_xml.find('Key').text
    name = parse_name(agency_xml)
    description = agency_xml.find('AgencyDescription').text
    website = parse_website(agency_xml)
    email = parse_email(agency_xml)
    return models.Organization(id, name, description, website, email)

def parse_email(agency_xml):
    email = agency_xml.find('Email/Address')
    if email is None:
        return None
    return email.text

def parse_website(agency_xml):
    website = agency_xml.find('URL/Address')
    if website is None:
        return None
    return website.text
