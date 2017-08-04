# Welcome to the Pathways Repo

## web
This is the front for the application, built with React.
### To start:
`PORT=5001 npm start`

## api
This is the backend for the application, built with Express.
### Environment setup
Make sure you have the following Environment vars set:

 * `PATHWAYS_MONGO_HOST`
 * `PATHWAYS_MONGO_PORT`
 * `PATHWAYS_MONGO_USER`
 * `PATHWAYS_MONGO_PASS`
 * `PATHWAYS_MONGO_DB`

### To start (recommended):
`nodemon app.js`

### Heroku Deployment
Set environment variables with:
`heroku config:set <ENV_NAME>=<value>`

For example:
`heroku config:set PATHWAYS_MONGO_DB=bc211`

### Database Management

`mongodump --uri <database uri> -o ~/data/bc211bk`

`mongorestore -u peacegeeks -p <password> --host ds159112.mlab.com --port 59112 -d bc211 ~/data/bc211bk/bc211/`
