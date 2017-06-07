const request = require('request');

var getWeather = (lat, lng, callback) => {
request({
  url: `https://api.darksky.net/forecast/"YOUR KEY HERE"/${lat},${lng}`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
          callback(undefined, {
              temp: body.currently.temperature
          });
  } else  {
         callback('Unable to fetch weather');
  }
}
);
}

module.exports.getWeather = getWeather;
