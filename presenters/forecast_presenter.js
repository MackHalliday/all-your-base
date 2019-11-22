const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

let GeoCodingService = require('../services/geo_coding_service.js');
let DarkSkyService = require('../services/dark_sky_service.js');
let ForecastCurrentlyObject = require('../models/forecast_currently_object.js')
let ForecastObject = require('../models/forecast_object.js')

let geoCodingService = new GeoCodingService();
let darkSkyService = new DarkSkyService();

class ForecastPresenter {
  constructor(){ }

  async favoriteLocationsAsync(favoriteLocations){
    let favoriteLocationsFormat = await Promise.all(favoriteLocations.map( async (location) => {
      let coordinates = await geoCodingService.getCoordinatesAsync(location.location);
      let forecast = await darkSkyService.getForecast(coordinates);
      return new ForecastCurrentlyObject(location.location, forecast);
    }));
    return favoriteLocationsFormat;
  }

  async locationAsync(location){
    let coordinates = await geoCodingService.getCoordinatesAsync(location);
    let forecast = await darkSkyService.getForecast(coordinates);
    return new ForecastObject(location, forecast);
  }
}
module.exports = ForecastPresenter
