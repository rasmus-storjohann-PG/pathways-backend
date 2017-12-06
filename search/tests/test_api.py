from rest_framework import test as rest_test
from rest_framework import status

from organizations.tests.helpers import OrganizationBuilder

class ServiceProvidersApiTests(rest_test.APITestCase):
    def test_lists_types(self):
        url = '/v1/search/'
        response = self.client.get(url)
        response_json = response.json()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('organizations', response_json)
        self.assertIn('locations', response_json)
        self.assertIn('services', response_json)

    def test_can_get_organizations(self):
        name = 'the_name'
        organization = OrganizationBuilder().with_name(name).build()
        organization.save()
        url = '/v1/search/'
        response = self.client.get(url)
        response_json = response.json()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response_json['organizations']), 1)
        self.assertEqual(response_json['organizations'][0]['name'], name)

    def test_cannot_post(self):
        url = '/v1/search/'
        response = self.client.post(url, {})
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_cannot_get_one_entity(self):
        organization = OrganizationBuilder().build()
        organization.save()
        url = '/v1/search/{0}/'.format(organization.pk)
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_cannot_put(self):
        organization = OrganizationBuilder().build()
        organization.save()
        url = '/v1/search/{0}/'.format(organization.pk)
        response = self.client.put(url, {})
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_cannot_delete(self):
        organization = OrganizationBuilder().build()
        organization.save()
        url = '/v1/search/{0}/'.format(organization.pk)
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
