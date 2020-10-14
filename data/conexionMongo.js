const chalk = require('chalk');
const mongoclient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config();

const uriMongodb = process.env.URIMONGO;

const client = new mongoclient(uriMongodb, {useUnifiedTopology: true, useNewUrlParser: true});

async function getConnection(){
    return await client.connect().catch(err => console.log(chalk.read(err)));
}

module.exports = {getConnection};