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

  let api_key = request.body.api_key
  let valid_key = await userObject.validKey(api_key)

  if (valid_key === true){
    let location = await request.query.location
    let locationData = await forecastPresenter.locationAsync(location);

    return response.status(200).json(locationData);
  } else {
    return response.status(401).send("Unauthorized");
  };
})

module.exports = router;
