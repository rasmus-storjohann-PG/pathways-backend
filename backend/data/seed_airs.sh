# Make sure you run the csv through the lint tool online: https://csvlint.io
# You can download a standardized version.

echo $PATHWAYS_MONGO_HOST $PATHWAYS_MONGO_PORT $PATHWAYS_MONGO_USER $PATHWAYS_MONGO_PASS $PATHWAYS_MONGO_DB
if [ -z "$PATHWAYS_MONGO_USER" ];
then mongoimport --host $PATHWAYS_MONGO_HOST --port $PATHWAYS_MONGO_PORT -d $PATHWAYS_MONGO_DB -c airs_taxonomy --type csv --file data/airs_dump/airs_taxonomy.csv --headerline;
else mongoimport --host $PATHWAYS_MONGO_HOST --port $PATHWAYS_MONGO_PORT --username $PATHWAYS_MONGO_USER --password $PATHWAYS_MONGO_PASS -d $PATHWAYS_MONGO_DB -c airs_taxonomy --type csv --file data/airs_dump/airs_taxonomy.csv --headerline;
fi
