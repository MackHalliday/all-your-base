class ForecastCurrentlyObject {
  constructor(location, forecast){
    this.location = location
    this.currently = forecast.currently
  }
}

module.exports = ForecastCurrentlyObject
