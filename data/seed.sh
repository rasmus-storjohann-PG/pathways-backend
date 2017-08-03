#!/bin/sh
set -e

# Seed the 211 data.
echo "Importing 211 Data..."
# node data/seed_211.js /Users/tukrre/Documents/peacegeeks/bc211/iCarolExport-BC211-HSDS-20170721_170621

# Clean the AIRS Taxonomy set.
echo "Cleaning AIRS CSV..."
# python data/clean_airs_csv.py

# Seed the AIRS Taxonomy set.
echo "Seeding AIRS..."
# sh data/seed_airs.sh

# Create the indexes.
echo "Creating indexes..."
node data/create_indexes.js

echo "Finished."
