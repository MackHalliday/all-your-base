let express = require('express');
let router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

let GeoCodingService = require('../../../services/geo_coding_service.js');
let geoCodingService = new GeoCodingService();

router.get('/', (request, response) => {
  let location = request.query.location
  let coordinates = geoCodingService.getCoordinates(location)
    .then((location) => {
      response.status(200).json(papers);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

module.exports = router;
