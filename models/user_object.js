const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

class UserObject {
  constructor(){
  }
  async validKey(api_key){
    if (typeof api_key === 'undefined'){ return false }

    let user = await database('users').where('api_key', api_key)

    if (user.length === 0)
      { return false
    } else
      { return true
    };
  }
}

module.exports = UserObject
