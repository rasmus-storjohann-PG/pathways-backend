from django.db import models
from django.core import validators
from parler.models import TranslatableModel, TranslatedFields
from common.string_database_fields import RequiredCharField, OptionalCharField

def contains_no_spaces():
    return validators.RegexValidator(regex=r'^[^ ]+$')


class Organization(TranslatableModel):
    id = RequiredCharField(primary_key=True, max_length=200, validators=[contains_no_spaces()])
    website = OptionalCharField(max_length=200, validators=[validators.URLValidator()])
    email = OptionalCharField(max_length=200, validators=[validators.EmailValidator()])
    translations = TranslatedFields(
        name=models.CharField(blank=False, max_length=200),
        description=models.TextField(blank=True)
    )

    def save(self, *args, **kwargs):
        self.clean()
        return super(Organization, self).save(*args, **kwargs)

    def clean(self):
        self.set_empty_fields_to_null()
        super(Organization, self).clean()

    def set_empty_fields_to_null(self):
        for field in self.all_fields():
            if self.can_be_null(field) and self.is_empty(field):
                self.set_to_null(field)

    def all_fields(self):
        return self._meta.fields

    def can_be_null(self, field):
        return field.null

    def is_empty(self, field):
        value = getattr(self, field.attname)
        return value in field.empty_values

    def set_to_null(self, field):
        setattr(self, field.attname, None)

    def __str__(self):
        return self.id
