let express = require('express');
let router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

// let GeoCodingService = require('../../../services/geo_coding_service.js');
// let DarkSkyService = require('../../../services/dark_sky_service.js');
let UserObject = require('../../../models/user_object.js');
let ForecastPresenter = require('../../../presenters/forecast_presenter.js')
// let ForecastObject = require('../../../models/forecast_object.js');

// let geoCodingService = new GeoCodingService();
// let darkSkyService = new DarkSkyService();
let userObject = new UserObject();
let forecastPresenter = new ForecastPresenter();

router.get('/', async function (request, response) {

  let apiKey = request.body.api_key
  let validKey = await userObject.validKey(apiKey)

  if (validKey === true ){
    let userId = await database('users').where('api_key', apiKey).select('id');
    // let favoriteLocations = await database('favorites').where('user_id', userId[0].id).select('location');

    let favoriteLocations = await forecastPresenter.favoriteLocationsAsync(userId);
    // let favoriteLocationsFormat = await favoriteLocations.map( location => {
    //     let coordinates = geoCodingService.getCoordinatesAsync(location.location);
    //     let forecast = darkSkyService.getForecast(coordinates);
    //     let forecastFormat = new ForecastObject(location, forecast);
    //   });

    return response.status(200).json(favoriteLocations);
  } else {
    return response.status(404).send("Unauthorized");
  };
})

module.exports = router;
