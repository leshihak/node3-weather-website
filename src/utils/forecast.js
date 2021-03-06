const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e7d61f489b6ab625456cd732d1eaf22f&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It's currently ${body.current.temperature} degrees out. There is a ${body.current.precip}% chance of rain. Today is ${body.location.localtime}`
      );
    }
  });
};

module.exports = forecast;
