const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/72f6d5ab35fe3566530ac74a5d636bd2/" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degress out. There is a " +
          body.currently.precipProbability +
          "% chance of rain.  The high for today is " +
          body.daily.data[0].temperatureHigh +
          ".  The low is " +
          body.daily.data[0].temperatureLow
      );
    }
  });
};

module.exports = forecast;
