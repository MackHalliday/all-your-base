const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

let GeoCodingService = require('../services/geo_coding_service.js');
let DarkSkyService = require('../services/dark_sky_service.js');
let ForecastObject = require('../models/forecast_object.js')

let geoCodingService = new GeoCodingService();
let darkSkyService = new DarkSkyService();

class ForecastPresenter {
  constructor(){ }

  async favoriteLocationsAsync(userId){
    let favoriteLocations = await database('favorites').where('user_id', userId[0].id).select('location');

    let favoriteLocationsFormat = await Promise.all(favoriteLocations.map( async (location) => {
        let coordinates = await geoCodingService.getCoordinatesAsync(location.location);
        let forecast = await darkSkyService.getForecast(coordinates);
        return new ForecastObject(location, forecast);
    }));
    return favoriteLocationsFormat;
  }
}
module.exports = ForecastPresenter
