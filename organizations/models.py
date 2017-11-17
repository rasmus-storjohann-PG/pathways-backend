from django.db import models
from django.core import validators
from parler.models import TranslatableModel, TranslatedFields

CONTAINS_NO_SPACES_VALIDATOR = validators.RegexValidator(regex=r'^[^ ]+$')

class Organization(TranslatableModel):
    id = models.CharField(primary_key=True, blank=False, max_length=200,
                          validators=[CONTAINS_NO_SPACES_VALIDATOR])
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
