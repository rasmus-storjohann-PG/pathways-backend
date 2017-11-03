from django.db import models
from parler.models import TranslatableModel, TranslatedFields

class ServiceProvider(TranslatableModel):
    name = models.CharField(max_length=200)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    translations = TranslatedFields(
        description=models.TextField(null=True)
    )
