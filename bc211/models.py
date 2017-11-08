from bc211 import validators

class SpatialLocation:
    def __init__(self, latitude, longitude):
        self.latitude = validators.validate_float(latitude)
        self.longitude = validators.validate_float(longitude)

class ServiceProvider:
    def __init__(self, name, description, spatial_location):
        has_spatial_location = spatial_location is not None
        self.latitude = spatial_location.latitude if has_spatial_location else None
        self.longitude = spatial_location.longitude if has_spatial_location else None
        self.name = name
        self.description = description
