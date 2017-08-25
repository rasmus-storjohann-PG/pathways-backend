#!/usr/bin/env node
'use strict';

/* 
Script to seed the database for Service Advisor Pathways.

Use this script to put the all the 211 data in the database. This script uses OpenReferral format for the
records to import the data, so you will need the data exported from iCarol in this format.

Find a sample here in Google Drive: https://drive.google.com/drive/folders/0B6riHKIYojeGN2pWZGpwN0JCYVk?usp=sharing

IMPORTANT NOTE:
Because the OpenReferral export does not currently export the custom BC211 taxonomy terms ({who, what why}), we 
have to pull these out of the iCarol XML export. 

You can find this data set here: https://drive.google.com/file/d/0B6riHKIYojeGaDVfQjlhVTNjSG8/view?usp=sharing
*/


var ArgumentParser = require('argparse').ArgumentParser;
var seedDatabaseFrom211 = require('./seed_211').seedDatabaseFrom211;
var store211Taxonomies = require('./seed_211_taxonomy').store211Taxonomies;

function parseArgs(){
    var parser = new ArgumentParser({
        version: '1.0.0',
        addHelp:true,
        description: 'Seed the Pathways database with the data required.'
    });
    parser.addArgument(
    'pathTo211OpenReferral',
    {
        help: 'Path to the directory containing BC211 data, exported in Open Referral standards.'
    }
    );
    parser.addArgument(
    'mode',
    {
        help: 'Select iCarol if you are using iCarol exported data, or testing if you are using test friendly data. The difference is that iCarol exports the data using custom file names, while the testing data has simpler files name (e.g. services.csv vs. iCarolExport-BC211-services-20170721_170621.csv)',
        choices: ['icarol', 'testing']
    }
    );
    parser.addArgument(
    'pathTo211Xml',
    {
        help: 'Path to the directory containing BC211 data, exported in XML format. The reason we need two versions of the 211 data is that currently the OpenReferral format does not contain the taxononmies.'
    }
    );
    return parser.parseArgs();

}
if (require.main === module) {
    var args = parseArgs();
    console.log(args);
    seedDatabaseFrom211(args.pathTo211OpenReferral, args.mode);
    store211Taxonomies(args.pathTo211Xml);
}