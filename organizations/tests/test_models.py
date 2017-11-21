from django.test import TestCase
from django.core import exceptions
from organizations import models
from organizations.tests.helpers import OrganizationBuilder

class TestOrganizationModel(TestCase):
    def test_has_id(self):
        id = 'the_id'
        organization = OrganizationBuilder().with_id(id).build()
        organization.save()
        organization_from_db = models.Organization.objects.get()
        self.assertEqual(organization_from_db.id, id)

    def test_id_cannot_be_none(self):
        id = None
        organization = OrganizationBuilder().with_id(id).build()
        with self.assertRaises(exceptions.ValidationError):
            organization.full_clean()

    def test_id_cannot_be_empty(self):
        id = ''
        organization = OrganizationBuilder().with_id(id).build()
        with self.assertRaises(exceptions.ValidationError):
            organization.full_clean()

    def test_has_name(self):
        name = 'The name'
        organization = OrganizationBuilder().with_name(name).build()
        organization.save()
        organization_from_db = models.Organization.objects.get()
        self.assertEqual(organization_from_db.name, name)

    def test_name_is_multilingual(self):
        organization = OrganizationBuilder().build()

        organization.set_current_language('en')
        organization.name = 'In English'
        organization.set_current_language('fr')
        organization.name = 'En français'
        organization.save()

        provider_from_db = models.Organization.objects.get()

        provider_from_db.set_current_language('en')
        self.assertEqual(provider_from_db.name, 'In English')
        provider_from_db.set_current_language('fr')
        self.assertEqual(provider_from_db.name, 'En français')

    def test_has_description(self):
        description = 'The description'
        organization = OrganizationBuilder().with_description(description).build()
        organization.save()
        organization_from_db = models.Organization.objects.get()
        self.assertEqual(organization_from_db.description, description)

    def test_description_can_be_blank(self):
        description = ''
        organization = OrganizationBuilder().with_description(description).build()
        organization.save()
        organization_from_db = models.Organization.objects.get()
        self.assertEqual(organization_from_db.description, description)

    def test_description_is_multilingual(self):
        organization = OrganizationBuilder().build()

        organization.set_current_language('en')
        organization.description = 'In English'
        organization.set_current_language('fr')
        organization.description = 'En français'
        organization.save()

        provider_from_db = models.Organization.objects.get()

        provider_from_db.set_current_language('en')
        self.assertEqual(provider_from_db.description, 'In English')
        provider_from_db.set_current_language('fr')
        self.assertEqual(provider_from_db.description, 'En français')

    def test_has_website(self):
        website = 'www.example.org'
        organization = OrganizationBuilder().with_website(website).build()
        organization.save()
        organization_from_db = models.Organization.objects.get()
        self.assertEqual(organization_from_db.website, website)

    def test_website_can_be_none(self):
        blank_website = None
        organization = OrganizationBuilder().with_website(blank_website).build()
        organization.save()
        organization_from_db = models.Organization.objects.get()
        self.assertEqual(organization_from_db.website, blank_website)

    def test_website_must_be_valid(self):
        invalid_website = 'not a valid website address'
        organization = OrganizationBuilder().with_website(invalid_website).build()
        with self.assertRaises(exceptions.ValidationError):
            organization.full_clean()

    def test_has_email(self):
        email = 'someone@example.org'
        organization = OrganizationBuilder().with_email(email).build()
        organization.save()
        organization_from_db = models.Organization.objects.get()
        self.assertEqual(organization_from_db.email, email)

    def test_email_must_be_valid(self):
        email = 'not a valid email address'
        organization = OrganizationBuilder().with_email(email).build()
        with self.assertRaises(exceptions.ValidationError):
            organization.full_clean()

    def test_email_can_be_none(self):
        blank_email = None
        organization = OrganizationBuilder().with_email(blank_email).build()
        organization.save()
        organization_from_db = models.Organization.objects.get()
        self.assertEqual(organization_from_db.email, blank_email)
