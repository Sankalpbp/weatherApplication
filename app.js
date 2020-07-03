'use strict'
const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=1033c76d0c1530af36960575ab2b03a8&query=New%20York';

// request is a function
// it will take two arguments
// one : the url
// and when it will fetch the data from the url, it will call the "Callback function", which is the second 
// argument

request({ url:url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});