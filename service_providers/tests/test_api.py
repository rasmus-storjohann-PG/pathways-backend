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
        url = '/v1/service-providers/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.json()), 2)

    def test_can_get_one_entity(self):
        provider = ServiceProviderBuilder().with_description('Service description').build()
        provider.save()
        url = '/v1/service-providers/{0}/'.format(provider.pk)
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()['description'], 'Service description')

    def test_cannot_post(self):
        url = '/v1/service-providers/'
        response = self.client.post(url, self.data)
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_cannot_put(self):
        provider = ServiceProviderBuilder().build()
        provider.save()
        url = '/v1/service-providers/{0}/'.format(provider.pk)
        response = self.client.put(url, self.data)
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_cannot_delete(self):
        provider = ServiceProviderBuilder().build()
        provider.save()
        url = '/v1/service-providers/{0}/'.format(provider.pk)
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
