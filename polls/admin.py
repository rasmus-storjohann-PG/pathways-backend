from django.contrib import admin
from polls.storage import models

admin.site.register(models.Question)
admin.site.register(models.Choice)
