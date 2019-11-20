var express = require('express');
var router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

//asynchronous function
router.get('/', (request, response) => {

  // await
  // need to handle promise -> database
  let userId = database('users').where('api_key', request.body.api_key)

  console.log(request.body.api_key)

   database('favorites').select('location').where({'user_id': userId})
    .then((favorites) => {
      response.status(200).json(favorites);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

module.exports = router;
