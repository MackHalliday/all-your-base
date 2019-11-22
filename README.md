

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
 
 Follow the following steps to setup application locally. Setup time is 5-10 minutes. 
 
#### Installing necessary dependencies
The easiest way to get started is to run the following command. This will pull down any necessary dependencies that your app will require. 

`npm install`

#### Set up your local database
You’ll need to figure out a name for your database. We suggest calling it something like `sweater_weather_dev`.  

To get things set up, you’ll need to access your Postgres instance by typing in `psql` into your terminal. Once there, you can create your database by running the comment `CREATE DATABASE PUT_DATABASE_NAME_HERE_dev;`. 

#### Migrations
Once you have your database setup, you’ll need to run some migrations (if you have any). You can do this by running the following command: 

`knex migrate:latest`


Instructions to create database, run migrations, and seed: 
```
psql
CREATE DATABASE DATABASE_NAME_dev;
\q

knex migrate:latest
knex seed:run
```

#### Adding Environment Keys 
Enviroment keys are required to use the Google Geocoding and DarkSky Service. 

Obtain a [Google Geocoding API key](https://developers.google.com/maps/documentation/geocoding/start?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_315916118159-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+~+Geocoding+API-KWID_43700039136946654-kwd-301485308042-userloc_9028770&utm_term=KW_%2Bgeocoding%20%2Bapi-ST_%2Bgeocoding+%2Bapi&gclid=Cj0KCQiAq97uBRCwARIsADTziyYRYcevs702ys1D_nUMrl6BxYXsNg6tsyFyC2a-xt2DtQcciq24R3UaAl-qEALw_wcB) and a [DarkSky API key](https://darksky.net/dev/docs). 

Create an `.env` file in the root of the dictory. 

In the `.env` file, add the following information: 
 
``` 
GOOGLE_API_KEY= your_google_api_key
DARKSKY_API_KEY= your_dark_sky_api_key
```

Add the `.env` to your .gitignore to avoid the file being pushed to GitHub

#### Set up your test database
Most of the setup is going to be same as the one you did before. You’ll notice one small difference with setting the environment flag to `test`.  

```
psql
CREATE DATABASE DATABASE_NAME_test;
\q

knex migrate:latest --env test
```
 
 ## How to Run Tests
 
 Running tests are simple and require you to run the following command below: 

`npm test`
 
 ## How to Use

 Recommend using [Postman](https://www.getpostman.com/) to hit endpoints. All endpoint begin with the root address and require a valid `api_key` in the body. 
 
 There are three valid api_key seeded in the database: `123`, `456`, and `789`. 
 
 ### Endpoints
 
 #### Root 
 
Production address

``` https://sweater-weather-express-js.herokuapp.com/```

Local address 

``` http://localhost:3000/ ```

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
  
  
