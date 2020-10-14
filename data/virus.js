const fetch = require('node-fetch');
const dotenv = require('dotenv').config();
console.log(process.env.XRAPIAPIKEY);

async function getTotals(){
    const options = {
        headers: {
            "x-rapidapi-key": process.env.XRAPIAPIKEY
        }
    };
    let data = await fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", options);
    data = await data.json();

    return data;
}

module.exports = {getTotals}