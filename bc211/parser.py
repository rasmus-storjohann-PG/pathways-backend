import xml.etree.ElementTree as etree
from urllib import parse as urlparse
from bc211 import models

def parse(xml_data_as_string):
    root_xml = etree.fromstring(xml_data_as_string)
    all_locations_xml = root_xml.findall('Agency')
    result = models.ParserResult()
    result.locations = map(parse_location, all_locations_xml)
    result.organizations = map(parse_organization, all_locations_xml)
    return result

def parse_location(location_xml):
    name = parse_name(location_xml)
    description = parse_description(location_xml)
    spatial_location = parse_spatial_location_if_defined(location_xml)
    return models.Location(name, description, spatial_location)

def parse_name(location_xml):
    return location_xml.find('Name').text

def parse_description(location_xml):
    return location_xml.find('AgencyDescription').text

def parse_spatial_location_if_defined(location_xml):
    latitude = location_xml.find('./Site/SpatialLocation/Latitude')
    longitude = location_xml.find('./Site/SpatialLocation/Longitude')
    if latitude is None or longitude is None:
        return None
    return models.SpatialLocation(latitude.text, longitude.text)

def parse_organization(agency_xml):
    id = parse_id(agency_xml)
    name = parse_name(agency_xml)
    description = parse_agency_description(agency_xml)
    website = parse_website(agency_xml)
    email = parse_email(agency_xml)
    return models.Organization(id, name, description, website, email)

def parse_id(agency_xml):
    return agency_xml.find('Key').text

def parse_agency_description(agency_xml):
    return agency_xml.find('AgencyDescription').text

def parse_email(agency_xml):
    email = agency_xml.find('Email/Address')
    return None if email is None else email.text

def parse_website(agency_xml):
    website = agency_xml.find('URL/Address')
    if website is None:
        return None
    return website_with_http_prefix(website.text)

def website_with_http_prefix(website):
    parts = urlparse.urlparse(website, 'http')
    url_with_extra_slash = urlparse.urlunparse(parts)
    return url_with_extra_slash.replace('///', '//')
