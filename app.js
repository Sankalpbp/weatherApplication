'use strict'
const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=1033c76d0c1530af36960575ab2b03a8&query=New%20York&units=s';

// request is a function
// it will take two arguments
// one : the url
// and when it will fetch the data from the url, it will call the "Callback function", which is the second 
// argument

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees. It feels like ' + response.body.current.feelslike);
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2Fua2FscGFyb3JhIiwiYSI6ImNrODl6bzZ2czAwNTMzcm41ZGZ1d3h1NWMifQ.nO07S82yqdXOhUO9THHCUg&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
});