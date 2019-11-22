

# Sweater Weather

#### [Visit Production Application](https://sweater-weather-express-js.herokuapp.com/)

## Table of Contents 
 *  [Introduction](https://github.com/MackHalliday/sweater_weather_express#introduction)
 *  [Initial Setup](https://github.com/MackHalliday/sweater_weather_express#intial-setup)
 *  [How to Run Tests](https://github.com/MackHalliday/sweater_weather_express#how-to-run-tests)
 *  [How to Use](https://github.com/MackHalliday/sweater_weather_express#how-to-use)
    * [Endpoints](https://github.com/MackHalliday/sweater_weather_express/blob/master/README.md#endpoints)
 *  [Schema Design](https://github.com/MackHalliday/sweater_weather_express#schema-design)
 *  [Tech Stack List](https://github.com/MackHalliday/sweater_weather_express#tech-stack-list)
 *  [Core Contributors](https://github.com/MackHalliday/sweater_weather_express#core-contributors)

## Introduction

* [Project Requirements](https://backend.turing.io/module4/projects/express_sweater_weather/express_sweater_weather_spec)

* [GitHub Project Board](https://github.com/MackHalliday/sweater_weather_express/projects/2)

 SweaterWeatherExpress is an API application with endpoints to return local weather. Users can also add favorite locations, delete favorite locations, and return all their favorited locals' current forecast. 
 
 This application was created with an Node.js framework. 
 
 ## Intial Setup 
 
 ## How to Run Tests
 
 ## How to Use

 Recommend using [Postman](https://www.getpostman.com/) to hit endpoints. All endpoint begin with the root address and require a valid `api_key` in the body. 
 
 There are three valid api_key seeded in the database: `123`, `456`, and `789`. 
 
 ### Endpoints
 
 #### Root 
Application address

``` https://sweater-weather-express-js.herokuapp.com/```

#### Forecast for City
Returns current weather and forecast for specific city

``` GET /api/v1/forecast?location=denver,co```

 ``` body:
   {
     "api_key": "YOUR_API_KEY"
   }
```

```location```: desired city location with state or country

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/853b5a98c9f7f92aeee4)

#### Favoriting Locations

  Adds a user's favorite city

  ``` POST /api/v1/favorites```
  ``` body:

   {
     "location": "Denver, CO",
     "api_key": "YOUR_API_KEY"
   }
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d05aaeb8653ee40e1f55)

#### Listing Favorite Locations

Returns the current weather for all of a user's favorited city

  ```GET /api/v1/favorites```
  
  ``` body:

   {
     "api_key": "YOUR_API_KEY"
   } 
   ```
 
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b5e72a298193247627e1)

#### Removing Favorite Locations

 Removes a user's favorited city
  
  ```DELETE /api/v1/favorites```
  
  ``` body 
     {
     "location": "Denver, CO",
     "api_key": "YOUR_API_KEY"
     }
  ```
  
 
 ## Schema Design 
 ![database_schema_image](https://user-images.githubusercontent.com/16658577/69433820-98502280-0cf9-11ea-8d6a-9305d65621d8.png)
 
 ## Tech Stack List
   *  [Node.js](https://nodejs.org/en/) 
   *  [Knex](http://knexjs.org/)
   *  [PostgreSQL](https://www.postgresql.org/)
   *  [Node-Fetch](https://www.npmjs.com/package/node-fetch)
   
  ## Core Contributors
  
  #### [Mack Halliday](https://github.com/MackHalliday)
  ##### [View LinkedIn](https://www.linkedin.com/in/mackhalliday/)
  
  
