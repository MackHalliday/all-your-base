let express = require('express');
let router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

const UserObject = require('../../../models/user_object.js');
const ForecastPresenter = require('../../../presenters/forecast_presenter.js')

const userObject = new UserObject();
const forecastPresenter = new ForecastPresenter();

router.get('/', async function (request, response) {

  let apiKey = request.body.api_key
  let user = await userObject.findUserByApiKey(apiKey)

  if ( user !== 'undefined'){
    let location = await request.query.location
    let locationData = await forecastPresenter.locationAsync(location);
    return response.status(200).json(locationData);
  } else {
    return response.status(401).send("Unauthorized");
  };
})

module.exports = router;
