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
  let validKey = await userObject.validKey(apiKey)

  if ( validKey === true ){
    let userId = await userObject.findUserIdByApiKey(apiKey)
    let favoriteLocations = await userObject.favoriteLocations(userId)
    let favoriteLocationsData = await forecastPresenter.favoriteLocationsAsync(favoriteLocations);

    return response.status(200).json(favoriteLocationsData);
  } else {
    return response.status(404).send("Unauthorized");
  };
})

router.post('/', async function (request, response) {
  let apiKey = request.body.api_key
  let validKey = await userObject.validKey(apiKey)

  if ( validKey === true ){
    let location = await request.body.location
    let userId = await userObject.findUserIdByApiKey(apiKey)
    userObject.addFavoriteLocation(userId)
    return response.status(200).send({messsage: `${location} has been added to your favorites`})
  } else {
    return response.status(404).send("Unauthorized");
  };
})

module.exports = router;
