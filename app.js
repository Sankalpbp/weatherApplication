'use strict'

const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

if (process.argv[2] === undefined) {
    return console.log('Please provide a location.');
}

geocode(process.argv[2], (error, geocodeData) => {

    if (error) {
        return console.log(error);
    }

    forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
    
        if (error) {
            return console.log(error);
        }

        console.log(geocodeData.location);
        console.log(forecastData);
    });
});

