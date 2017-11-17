from django.db import models
from django.core import validators
from parler.models import TranslatableModel, TranslatedFields

def contains_no_spaces_validator():
    return validators.RegexValidator(regex=r'^[^ ]+$')

class Organization(TranslatableModel):
    id = models.CharField(primary_key=True, blank=False, max_length=200,
                          validators=[contains_no_spaces_validator()])
    website = models.CharField(null=True, blank=True, default=None, max_length=200,
                               validators=[validators.URLValidator()])
    email = models.CharField(null=True, blank=True, default=None, max_length=200,
                             validators=[validators.EmailValidator()])
    translations = TranslatedFields(
        name=models.CharField(blank=False, max_length=200),
        description=models.TextField(blank=True)
    )

    def __str__(self):
        return self.id
