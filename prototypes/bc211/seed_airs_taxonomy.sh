# Make sure you run the csv through the lint tool online: https://csvlint.io
# You can download a standardized version.
mongoimport --host $PATHWAYS_MONGO_HOST --port $PATHWAYS_MONGO_PORT -u $PATHWAYS_MONGO_USER -p $PATHWAYS_MONGO_PASS -d bc211 -c airs_taxonomy --type csv --file data/airs_taxonomy.csv --headerline
