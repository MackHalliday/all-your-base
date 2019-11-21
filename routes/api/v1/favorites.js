let express = require('express');
let router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

let UserObject = require('../../../models/user_object.js');
let ForecastPresenter = require('../../../presenters/forecast_presenter.js')

let userObject = new UserObject();
let forecastPresenter = new ForecastPresenter();

router.get('/', async function (request, response) {
  let apiKey = request.body.api_key
  let validKey = await userObject.validKey(apiKey)

  if (validKey === true ){
    let userId = await database('users').where('api_key', apiKey).select('id');
    let favoriteLocations = await forecastPresenter.favoriteLocationsAsync(userId);

    return response.status(200).json(favoriteLocations);
  } else {
    return response.status(404).send("Unauthorized");
  };
})

module.exports = router;
