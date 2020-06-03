# WeatherFinder
App on React to find out the weather in the geographic area</br>
  - clone/download the repo branch </br>
  - `npm install`</br>
  - `npm start`</br>

I've not found free servise to convert city names to their coordinates ("geocoding"), so you have to make it manually, sorry.
  geo coords of Kaliningrad:<br>
  54.4312 (54° 43' 27) north latitude<br>
  20.3118 (20° 31' 44) east long<br>



 ```API Base URL: http://api.weatherunlocked.com/ or https://api.weatherunlocked.com/
 api/{LocalWeatherType}/{Location}?app_id={APP_ID}&app_key={APP_KEY}
 {LocalWeatherType} can be "current" or "forecast" Example:
 http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id={APP_ID}&app_key={APP_KEY}
 Valid decimal geolocation coordinates with the following format: "latitude,longitude", with no more than 3 decimal places  OR postcodes:
  (@ = Letter, # = Number)
 United Kingdom  'uk'  'uk.postcode'
 United States 'us'  'us.#####'
 Example: Current Weather and UK postcode
 http://api.weatherunlocked.com/api/current/uk.G3 8ND?app_id=APP_ID&app_key=APP_KEY
 Example: Forecast Weather and US zipcode
 http://api.weatherunlocked.com/api/forecast/us.33109?app_id=APP_ID&app_key=APP_KEY
 and local language :
 Example: Forecast Weather for NY with Italian descriptions
 http://api.weatherunlocked.com/api/forecast/40.7,-74?lang=it&app_id=APP_ID&app_key=APP_KEY```
