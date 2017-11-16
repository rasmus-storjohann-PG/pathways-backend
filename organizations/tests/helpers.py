from organizations import models

class OrganizationBuilder:
    def __init__(self):
        self.id = 'default_id'
        self.name = ''
        self.description = ''
        self.website = ''
        self.email = ''

    def with_id(self, id):
        self.id = id
        return self

    def with_name(self, name):
        self.name = name
        return self

    def with_description(self, description):
        self.description = description
        return self

    def with_website(self, website):
        self.website = website
        return self

    def with_email(self, email):
        self.email = email
        return self

    def build(self):
        result = models.Organization()
        result.id = self.id
        result.name = self.name
        result.description = self.description
        result.website = self.website
        result.email = self.email
        return result
