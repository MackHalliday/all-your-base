const fetch = require('node-fetch');

class GeoCodingService {
  constructor(){
    this.baseUrl = "https://maps.googleapis.com/maps/api"
  }
  async getCoordinatesAsync(location){
    let response = await fetch(`${this.baseUrl}/geocode/json?address=${location}&key=${process.env.GOOGLE_API_KEY}`)
    let data = await response.json()
    return data.results[0].geometry.location;
  }
}
module.exports = GeoCodingService
