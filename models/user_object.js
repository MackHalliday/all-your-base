const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

class UserObject {
  constructor(){
  }
  // async validKey(api_key){
  //   if (typeof api_key === 'undefined'){ return false }
  //   let user = await database('users').where('api_key', api_key)
  //   return user.length !== 0
  // }

  async favoriteLocations(userId){
    return database('favorites').where('user_id', userId[0].id).select('location')
  }

  async findUserByApiKey(apiKey){
    return database('users').where('api_key', apiKey);
  }

  // async findUserIdByApiKey(apiKey){
  //   return database('users').where('api_key', apiKey).select('id');
  // }

  async addFavoriteLocation(user, location){
    return database('favorites').insert({location: location, user_id: user[0].id})
  }

  async deleteFavoriteLocation(user, location){
    return database('favorites').where({location: location, user_id: user[0].id}).del()
  }
}

module.exports = UserObject
