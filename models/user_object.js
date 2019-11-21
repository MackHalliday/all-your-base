class UserObject {
  constructor(){

  }
  async validKey(api_key){
    console.log(api_key)
    if(typeof api_key === 'undefined'){ return false }
  }
}

module.exports = UserObject
