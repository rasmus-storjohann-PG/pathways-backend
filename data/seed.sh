#!/bin/sh
set -e

# Seed the 211 data.
echo "Importing 211 Data..."
node data/seed_211.js /Users/tukrre/Documents/peacegeeks/bc211/iCarolExport-BC211-HSDS-20170721_170621 icarol

echo "Seeding BC211 Taxonomies..."
node data/seed_211_taxonomy.js /Users/tukrre/Documents/peacegeeks/bc211/AIRSXML_2252_Export_20170109050136_BC_211.xml

echo "Finished."
