import xml.etree.ElementTree as etree
from urllib import parse as urlparse
from bc211 import models

def parse(xml_data_as_string):
    root_xml = etree.fromstring(xml_data_as_string)
    agencies = root_xml.findall('Agency')
    result = models.ParserResult()
    result.organizations = map(parse_agency, agencies)
    result.locations = map(parse_location, agencies)
    return result

def parse_agency(agency):
    id = parse_agency_key(agency)
    name = parse_agency_name(agency)
    description = parse_agency_description(agency)
    website = parse_agency_website(agency)
    email = parse_agency_email(agency)
    return models.Organization(id, name, description, website, email)

def parse_agency_key(agency):
    return agency.find('Key').text

def parse_agency_name(agency):
    return agency.find('Name').text

def parse_agency_description(agency):
    return agency.find('AgencyDescription').text

def parse_agency_email(agency):
    email = agency.find('Email/Address')
    return None if email is None else email.text

def parse_agency_website(agency):
    website = agency.find('URL/Address')
    if website is None:
        return None
    return website_with_http_prefix(website.text)

def website_with_http_prefix(website):
    parts = urlparse.urlparse(website, 'http')
    url_with_extra_slash = urlparse.urlunparse(parts)
    return url_with_extra_slash.replace('///', '//')

def parse_location(agency):
    name = parse_site_name(agency)
    description = parse_site_description(agency)
    spatial_location = parse_spatial_location_if_defined(agency)
    return models.Location(name, description, spatial_location)

def parse_site_name(agency):
    return agency.find('Site/Name').text

def parse_site_description(agency):
    return agency.find('Site/SiteDescription').text

def parse_spatial_location_if_defined(agency):
    latitude = agency.find('./Site/SpatialLocation/Latitude')
    longitude = agency.find('./Site/SpatialLocation/Longitude')
    if latitude is None or longitude is None:
        return None
    return models.SpatialLocation(latitude.text, longitude.text)
