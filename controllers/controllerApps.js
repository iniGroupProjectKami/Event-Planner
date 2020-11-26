const axios = require("axios");

class ControllerApp {
  static async showMuseumJakarta(req, res, next) {
    try {
      const result = await axios({
        method: `GET`,
        url: `http://api.jakarta.go.id/v1/museum/`,
        headers: { Authorization: process.env.JKT48_KEY },
      });
      res.status(200).json(result.data.data);
    } catch (error) {
      // res.status(500).json(error);
      next(error)
    }
  }


  static async showHolidays(req, res, next) {
    try {
      const result = await axios({
        method: `GET`,
        url: `https://calendarific.com/api/v2/holidays?api_key=${process.env.CALENDARIFIC_KEY}&country=ID&year=2020`,
      });
      res.status(200).json(result.data.response.holidays);
    } catch (error) {
      // res.status(500).json(error);
      next(error)
    }
  }


  static async showWeather(req, res, next) {
    try {
      const result = await axios({
        method: `GET`,
        url: `https://api.openweathermap.org/data/2.5/weather?lat=-6.189112310695864&lon=106.84186652717992&appid=${process.env.WEATHER_KEY}`,
      });
      // console.log(result);
      res.status(200).json(result.data);
    } catch (error) {
      // console.log(error);
      // res.status(500).json(error);
      next(error)
    }
  }
}

module.exports = ControllerApp;
