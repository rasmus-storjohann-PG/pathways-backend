from django.db import models
from django.core import exceptions, validators
from parler.models import TranslatableModel, TranslatedFields
from organizations.models import Organization
from common.models import ValidateOnSaveMixin, RequiredCharField

class Location(ValidateOnSaveMixin, TranslatableModel):
    id = RequiredCharField(primary_key=True, max_length=200, validators=[validators.validate_slug])
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    translations = TranslatedFields(
        name=models.CharField(max_length=200),
        description=models.TextField(blank=True, null=True)
    )

    def __str__(self):
        return self.name

    def clean(self):
        self.validate_latitude_and_longitude()
        super(Location, self).clean()

    def validate_latitude_and_longitude(self):
        latitude_is_null = self.latitude is None
        longitude_is_null = self.longitude is None
        if latitude_is_null != longitude_is_null:
            raise_mismatch_exception(latitude_is_null, longitude_is_null)

def raise_mismatch_exception(latitude_is_null, longitude_is_null):
    message = make_mismatch_message(latitude_is_null, longitude_is_null)
    raise exceptions.ValidationError(message)

def make_mismatch_message(latitude_is_null, longitude_is_null):
    latitude_message = make_null_message(latitude_is_null)
    longitude_message = make_null_message(longitude_is_null)
    template = 'Latitude is {0} but longitude is {1}, they must match'
    return template.format(latitude_message, longitude_message)

def make_null_message(is_null):
    return 'null' if is_null else 'not null'
