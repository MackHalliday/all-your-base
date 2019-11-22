const fetch = require('node-fetch');

class DarkSkyService {
  constructor(){
    this.baseUrl = "https://api.darksky.net/forecast"
  }
  async getForecast(coordinates){
    let latitude = await coordinates.lat
    let longitude = await coordinates.lng

    let response = await fetch(`${this.baseUrl}/${process.env.DARKSKY_API_KEY}/${latitude},${longitude}`)
    return response.json();
  }
}

module.exports = DarkSkyService
