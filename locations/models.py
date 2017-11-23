from django.db import models
from parler.models import TranslatableModel, TranslatedFields
from organizations.models import Organization
from common.models import ValidatingModel, RequiredCharField, contains_no_spaces

class Location(ValidatingModel):
    id = RequiredCharField(primary_key=True, max_length=200, validators=[contains_no_spaces()])
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    translations = TranslatedFields(
        description=models.TextField(blank=True)
    )

    def __str__(self):
        return self.name
