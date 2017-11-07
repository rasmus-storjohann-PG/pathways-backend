from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _

class ServiceProvidersConfig(AppConfig):
    name = 'service_providers'
    verbose_name = _("Service providers")
