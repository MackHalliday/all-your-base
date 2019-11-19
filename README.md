

# Sweater Weather
#### Created by: [Mack Halliday](https://github.com/MackHalliday)

## Table of Contents 
 *  [Introduction]()
 *  [Initial Setup]()
 *  [How to Run Tests]()
 *  [How to Use]()
 *  [Schema Design]()
 *  [Tech Stack List]()
 *  [Core Contributors]()

## Introduction

* [Project Requirements](https://backend.turing.io/module4/projects/express_sweater_weather/express_sweater_weather_spec)

* [GitHub Project Board](https://github.com/MackHalliday/sweater_weather_express/projects/2)

 SweaterWeatherExpress is an API application with endpoints to return local weather.
 
 ## Intial Setup 
 
 ## How to Run Tests
 
 ## How to Use
 
 ## Schema Design 
 
 ## Tech Stack List
 
 ## Core Contributors

 ## Endpoints

### Root 
Application address

``` https://sweater-weather-express-js.herokuapp.com/```

### Forecast for City
Returns current weather and forecast for location

``` GET /api/v1/forecast?location=denver,co```

```location```: desired city location with state or country

[![Run in Postman](https://run.pstmn.io/button.svg)]()

### Favoriting Locations

  Adds a user's favorite city

  ``` POST /api/v1/favorites```
  ``` body:

   {
     "location": "Denver, CO",
     "api_key": "YOUR_API_KEY"
   }
```
[![Run in Postman](https://run.pstmn.io/button.svg)]()

### Listing Favorite Locations

Lists all of user's favorited locations

  ```GET /api/v1/favorites```
  
  ``` body:

   {
     "api_key": "YOUR_API_KEY"
   } 
   ```
 
[![Run in Postman](https://run.pstmn.io/button.svg)]()

### Removing Favorite Locations

 Removes a user's favorite location
  
  ```DELETE /api/v1/favorites```
  
  ``` body 
     {
     "location": "Denver, CO",
     "api_key": "YOUR_API_KEY"
     }
  ```
  
  [![Run in Postman](https://run.pstmn.io/button.svg)]()
  
