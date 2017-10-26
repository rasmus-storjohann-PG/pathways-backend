# Pathways backend

This repository contains the server for providing access to data about services for refugees and immigrants to BC.

At this stage, our focus is on establishing the server architecture and testing frameworks for unit, integration and feature testing, continuous integration, logging, etc. The domain model is still that from a django turorial on polls, with a single one-to-many relationship from questions to choices. The plan is for future services to be built with the polls service as pattern, and the polls patter to be discarded. This will happen as our understanding of our domain improves.

## Getting started

Set up and activate a python v3 environment

```
python3 -m venv PW
source ./PW/bin/activate
```

Clone the repository:

```
git clone https://github.com/pg-irc/pathways-backend.git
cd pathways-backend/
```

Install required libraries in the python environment created above:

`pip install -r requirements.txt`

Create database tables -- note that we are using SqlLite for now, the plan is to deploy on Postgres:

`python manage.py migrate`

Create the django administration account:

`python manage.py createsuperuser`

Run the unit tests

`python manage.py test`

Start the server

`python manage.py runserver`

You should now be able to access the server at http://127.0.0.1:8000/v1/. The Django admin tool is at http://127.0.0.1:8000/v1/admin/, and the question and choice entities are available at http://127.0.0.1:8000/v1/questions/ and http://127.0.0.1:8000/v1/questions/1/choices/.

## Architecture

An important goal of this architecture is to isolate business logic from the framework. The benefits of this is to make it easier to make changes to the framework we're using, e.g. a major version upgrade of the framework should have very limited impact on the business logic implementation. It also makes the business logic easier to test, since few or no framework components need to be brought into the testing code.

The code base is therefore separated into three, web containing the django code related to presenting a web interface to the model, storage containg the model and query code, divided into repositories, and finally the business logic which is currently just a file but this will likely evolve into a folder or folder structure.

The organization of the test code in a parallel directory structure is a little awkward and I will be looking to improve this as the number of tests increases.

While for the moment, the server does serve up some very simple HTML forms as well as JSON, the plan is for the server to provide JSON only (other than the administration portal and API documentation). This change will remove the templates directory and simplify the url specification files. I also don't know whether we will be using namespaces in our url definition files, so the inconsistency around that will be resolved once we understand the implications of that choice.
