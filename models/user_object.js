const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

class UserObject {
  constructor(){
  }
  async validKey(api_key){
    if (typeof api_key === 'undefined'){ return false }

    let user = await database('users').where('api_key', api_key)

    return user.length !== 0
  }
  async favoriteLocations(userId){
    return await database('favorites').where('user_id', userId[0].id).select('location')
  }

  async findUserIdByApiKey(apiKey){
    return database('users').where('api_key', apiKey).select('id');
  }
}

module.exports = UserObject
