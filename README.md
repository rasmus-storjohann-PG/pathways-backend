# Pathways Backend API
[![Build Status](https://travis-ci.org/pg-irc/pathways-backend.svg?branch=master)](https://travis-ci.org/pg-irc/pathways-backend)
## Background
---
#### Description
This is the backend API for the Pathways application, built with Express. 
It contains the API for retrieving human services data, and will be used in the Pathways frontend.

#### Technologies
This project uses [ExpressJS](https://expressjs.com/) as the web framework for creating the API endpoints. It also attempts to adhere to the [OpenReferral](https://openreferral.org/) standards. This means two things:
1. Providing an API that is compliant with [the Human Services Data Specification API (HSDS API)](https://openreferral.github.io/api-specification/definition/)
2. Allowing data that meets the [OpenReferral modelling specification](https://openreferral.readthedocs.io/en/latest/reference/#objects-and-fields) to be imported.

To implement the HSDS API, Swagger is used to generate the endpoints, using the [OpenAPI file](https://openreferral.github.io/api-specification/definition/yaml/) provided through the OpenReferral effort. Through Swagger, the API endpoints are validated automatically to ensure the API returns compliant responses. 
## Configuration
---
#### Environment setup
Make sure you have the following Environment vars set:
 * `PATHWAYS_MONGO_HOST` - the host of the MongoDB storing Services records (ds159112.mlab.com)
 * `PATHWAYS_MONGO_PORT` - the port of the MongoDB storing Services records. (59112)
 * `PATHWAYS_MONGO_USER` - the user with access tothe MongoDB storing Services records. (peacegeeks)
 * `PATHWAYS_MONGO_PASS` - (ask a developer)
 * `PATHWAYS_MONGO_DB` - the name of the DB storing Services records. (bc211)

## Local Development
---
### To get setup:
`npm install`
### To start
`swagger project start`
### Docker
You can also run the entire backend stack through Docker if you prefer. There is a docker compose file that brings up the backend and the MongoDB in a single stack with:
`docker-compose up`

## Heroku Deployment
---
#### Set up Heroku
Add the Heroku remote 

`git remote add heroku https://git.heroku.com/pathways-backend.git`

#### Upload New Changes
Deploy changes to Heroku

`git push heroku master`

#### Add environment vars (only on new Heroku instances)
Set environment variables with:

`heroku config:set <ENV_NAME>=<value>`

For example:

`heroku config:set PATHWAYS_MONGO_DB=bc211`

## Database Management
---
#### Seeding Data
 *TODO: Fill this part in!*
#### Migrating Data
`mongodump --uri <database uri> -o ~/data/bc211bk`

`mongorestore -u peacegeeks -p <password> --host ds159112.mlab.com --port 59112 -d bc211 ~/data/bc211bk/bc211/`
