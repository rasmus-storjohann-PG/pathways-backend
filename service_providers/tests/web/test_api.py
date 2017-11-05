from rest_framework import test as rest_test
from rest_framework import status
from service_providers.tests.helpers import ServiceProviderBuilder

class ServiceProvidersApiTests(rest_test.APITestCase):
    def setUp(self):
        self.data = {
            'name': 'The name',
            'latitude': 123.456,
            'longitude': 234.567,
            'description': 'The description'
        }

    def test_can_get_entities(self):
        ServiceProviderBuilder().with_name('First').build().save()
        ServiceProviderBuilder().with_name('Second').build().save()
        url = '/v1/service_providers/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.json()), 2)

    def test_can_get_one_entity(self):
        provider = ServiceProviderBuilder().with_description('Service description').build()
        provider.save()
        url = '/v1/service_providers/{0}/'.format(provider.pk)
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()['description'], 'Service description')
