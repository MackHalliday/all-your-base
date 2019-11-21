let express = require('express');
let router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

let GeoCodingService = require('../../../services/geo_coding_service.js');
let geoCodingService = new GeoCodingService();

let DarkSkyService = require('../../../services/dark_sky_service.js');
let darkSkyService = new DarkSkyService();

router.get('/', async function (request, response, next) {
  let location = await request.query.location
  let coordinates = await geoCodingService.getCoordinatesAsync(location);
  let forecast = await darkSkyService.getForecast(coordinates);

  response.status(200).json(forecast);
})

module.exports = router;
