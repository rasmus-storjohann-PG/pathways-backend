# Pathways Backend API
[![Build Status](https://travis-ci.org/pg-irc/pathways-backend.svg?branch=master)](https://travis-ci.org/pg-irc/pathways-backend)

[Live API](http://pathways-backend.herokuapp.com/api-docs/)

## Background
---
#### Description
This is the backend API for the Pathways application, built with Express. 
It contains the API for retrieving human services data, and will be used in the [Pathways frontend](https://github.com/pg-irc/pathways-frontend).

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
### Seeding Data
Run the script:
```javascript
node data/seed_database.js PATH_TO_211_OPEN_REFERRAL MODE PATH_TO_211_XML
```
#### Background
The backend is built to work on Human Services data stored in the BC211 datasets. BC211 uses [iCarol](http://icarol.com/) as their storage solution, so the data we seed the database is exported from here. It is intended that we will receive periodic data dumps from BC211, and sync to these, so that we do not have to maintain the integrity of the data ourselves. 

In order to get started on a new deployment (local or otherwise), you must seed the database with the BC211 dataset.

#### BC211 Services and Other Data
The first thing you must seed is the BC211 data. This application supports importing this data in an OpenReferral format. iCarol supports exporting the data like this, so one must request the data from them. Contact a team member to get a data set.

#### BC211 Custom Taxonomies
BC211 uses their own custom taxonomy set to categorize their data for maximum utility. Unfortunately, OpenReferral exporting does not export these additional taxonomy terms, so we must seed them manually, by parsing the XML-formatted version of the data.

### Migrating Data
You can use the standard MongoDB migration tools to perform database migrations.
#### Dumping Database
`mongodump --uri <database uri> -o ~/data/bc211bk`
#### Restoring Database
`mongorestore -u peacegeeks -p <password> --host ds159112.mlab.com --port 59112 -d bc211 ~/data/bc211bk/bc211/`
