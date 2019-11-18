

# Sweater Weather
#### Created by: [Mack Halliday](https://github.com/MackHalliday)

## Contents 
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

[View Example](https://sweater-weather-express-js.herokuapp.com/api/v1/forecast?location=denver,co)

### City Background Image

  Returns large image with orientation as landscape

  ``` GET /api/v1/backgrounds?location=denver,co```

  ```location```: Desired city location with state or country

  [View Example](https://sweater-weather-halliday.herokuapp.com/api/v1/backgrounds?location=denver,co)

### Create User Account

  Creates a user with valid emails and password matching password confirmation
  
  If successful, will return user's API key and 201 status

  ```POST /api/v1/users```
  
  ``` body 
    {
     "email": "whatever@example.com",
     "password": "password",
     "password_confirmation": "password"
     }
  ```
  
  ```email```: Must be valid email not already used by another user
  
  ```password```: Desired password
  
  ```password_confirmation```: Must match password
  
[![Run in Postman](https://run.pstmn.io/button.svg)]()

### Login User

  Logins in user with correct password
  
  If successful, will return user's API key and 201 status
  

  ```POST /api/v1/sessions ```
  
  ``` body 
    {
     "email": "whatever@example.com",
     "password": "password",
     }
  ```
  
  ```email```: Must match email used to create account
  
  ```password```: Must match password used to create account
  
  [![Run in Postman](https://run.pstmn.io/button.svg)]()
  
