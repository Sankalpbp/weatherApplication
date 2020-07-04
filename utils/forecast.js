'use strict'

const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=1033c76d0c1530af36960575ab2b03a8&query=' + latitude + ',' + longitude + '&units=s';

    request({ url: url, json: true}, (error, response) => {

        if (error) {
            callback('Unable to connect to the weather services!', undefined);
        } else if (response.body.error){
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, {
                description: response.body.current.weather_descriptions[0],
                feels_like: response.body.current.feelslike
            });
        }
    });
};

module.exports = forecast;