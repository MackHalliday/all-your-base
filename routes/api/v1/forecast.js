// import setup file (...file)
// how to import setup
// see all_your_base_testing

let express = require('express');
let router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

let GeoCodingService = require('../../../services/geo_coding_service.js');
let DarkSkyService = require('../../../services/dark_sky_service.js');
let UserObject = require('../../../models/user_object.js');
let ForecastObject = require('../../../models/forecast_object.js');

let geoCodingService = new GeoCodingService();
let darkSkyService = new DarkSkyService();
let userObject = new UserObject();

router.get('/', async function (request, response) {

  let api_key = request.body.api_key
  let valid_key = await userObject.validKey(api_key)

  if (valid_key === true){
    let location = await request.query.location
    let coordinates = await geoCodingService.getCoordinatesAsync(location);
    let forecast = await darkSkyService.getForecast(coordinates);
    let forcastFormat = await new ForecastObject(location, forecast);
    return response.status(200).json(forcastFormat);
  } else {
    return response.status(401).send("Unauthorized");
  };
})

module.exports = router;
