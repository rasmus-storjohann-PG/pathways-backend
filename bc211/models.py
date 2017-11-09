from bc211 import validators

class SpatialLocation:
    def __init__(self, latitude, longitude):
        self.latitude = validators.validate_float(latitude)
        self.longitude = validators.validate_float(longitude)

class ServiceProvider:
    def __init__(self, name, description, spatial_location):
        self.name = name
        self.description = description
        self.spatial_location = spatial_location
