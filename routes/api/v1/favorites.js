var express = require('express');
var router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

router.get('/', (request, response) => {
  let apiKey = JSON.stringify(request.body.api_key)
  let userId = database('users').where({api_key: apiKey})

  database('favorites').select('location').where({user_id: userId})
    .then((favorites) => {
      response.status(200).json(favorites);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

module.exports = router;
