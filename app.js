'use strict'

const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');


geocode('Amritsar', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

forecast(31.3260, 75.5762, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
});