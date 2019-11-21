let express = require('express');
let router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

let GeoCodingService = require('../../../services/geo_coding_service.js');
let DarkSkyService = require('../../../services/dark_sky_service.js');
let UserObject = require('../../../models/user_object.js');

let geoCodingService = new GeoCodingService();
let darkSkyService = new DarkSkyService();
let userObject = new UserObject();

router.get('/', async function (request, response, next) {

  let api_key = request.body.api_key
  let valid_key = await userObject.validKey(api_key)
  console.log(valid_key)

  let location = await request.query.location
  let coordinates = await geoCodingService.getCoordinatesAsync(location);
  let forecast = await darkSkyService.getForecast(coordinates);

  response.status(200).json(forecast);

})

module.exports = router;
