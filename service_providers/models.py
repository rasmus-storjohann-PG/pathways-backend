from django.db import models

class ServiceProvider(models.Model):
    name = models.CharField(max_length=200)
