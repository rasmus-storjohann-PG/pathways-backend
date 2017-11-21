from rest_framework import test as rest_test
from rest_framework import status
from locations.tests.helpers import LocationBuilder

class LocationsApiTests(rest_test.APITestCase):
    def setUp(self):
        self.data = {
            'name': 'The name',
            'latitude': 123.456,
            'longitude': 234.567,
            'description': 'The description'
        }

    def test_can_get_entities(self):
        LocationBuilder().with_name('First').build().save()
        LocationBuilder().with_name('Second').build().save()
        url = '/v1/locations/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.json()), 2)

    def test_can_get_one_entity(self):
        location = LocationBuilder().with_description('Location description').build()
        location.save()
        url = '/v1/locations/{0}/'.format(location.pk)
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()['description'], 'Location description')

    def test_cannot_post(self):
        url = '/v1/locations/'
        response = self.client.post(url, self.data)
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_cannot_put(self):
        location = LocationBuilder().build()
        location.save()
        url = '/v1/locations/{0}/'.format(location.pk)
        response = self.client.put(url, self.data)
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_cannot_delete(self):
        location = LocationBuilder().build()
        location.save()
        url = '/v1/locations/{0}/'.format(location.pk)
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
