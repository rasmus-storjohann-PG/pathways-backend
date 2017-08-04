# Welcome to the Pathways Repo
[![Build Status](https://travis-ci.org/pg-irc/pathways-backend.svg?branch=master)](https://travis-ci.org/pg-irc/pathways-backend)
This is the backend for the Pathways application, built with Express.

### Environment setup
Make sure you have the following Environment vars set:

 * `PATHWAYS_MONGO_HOST`
 * `PATHWAYS_MONGO_PORT`
 * `PATHWAYS_MONGO_USER`
 * `PATHWAYS_MONGO_PASS`
 * `PATHWAYS_MONGO_DB`

### To start (recommended):
`swagger project start`

### Heroku Deployment
Set environment variables with:
`heroku config:set <ENV_NAME>=<value>`

For example:
`heroku config:set PATHWAYS_MONGO_DB=bc211`

### Database Management

`mongodump --uri <database uri> -o ~/data/bc211bk`

`mongorestore -u peacegeeks -p <password> --host ds159112.mlab.com --port 59112 -d bc211 ~/data/bc211bk/bc211/`
