from django.db import models

class OptionalCharField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['null'] = True
        kwargs['blank'] = True
        super(OptionalCharField, self).__init__(*args, **kwargs)

    def deconstruct(self):
        name, path, args, kwargs = super(OptionalCharField, self).deconstruct()
        kwargs.pop('null', None)
        kwargs.pop('blank', None)
        return name, path, args, kwargs


class RequiredCharField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['null'] = False
        kwargs['blank'] = False
        super(RequiredCharField, self).__init__(*args, **kwargs)

    def deconstruct(self):
        name, path, args, kwargs = super(RequiredCharField, self).deconstruct()
        kwargs.pop('null', None)
        kwargs.pop('blank', None)
        return name, path, args, kwargs
