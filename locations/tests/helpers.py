from decimal import Decimal
from locations import models

class LocationBuilder:
    def __init__(self, organization):
        self.organization = organization
        self.name = 'default name'
        self.latitude = Decimal('0.0')
        self.longitude = Decimal('0.0')
        self.description = 'default description'

    def with_name(self, name):
        self.name = name
        return self

    def with_latitude(self, latitude):
        self.latitude = latitude
        return self

    def with_longitude(self, longitude):
        self.longitude = longitude
        return self

    def with_description(self, description):
        self.description = description
        return self

    def build(self):
        result = models.Location()
        result.name = self.name
        result.organization = self.organization
        result.latitude = self.latitude
        result.longitude = self.longitude
        result.description = self.description
        return result
