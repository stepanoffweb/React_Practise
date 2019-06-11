import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "95b86822741aadf615e1da0ac5ded8b3",
    APP_ID = "ab684c34";
// API Base URL: http://api.weatherunlocked.com/ or https://api.weatherunlocked.com/
// api/{LocalWeatherType}/{Location}?app_id={APP_ID}&app_key={APP_KEY}
// {LocalWeatherType} can be "current" or "forecast" Example:
// http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id={APP_ID}&app_key={APP_KEY}
// Valid decimal geolocation coordinates with the following format: "latitude,longitude", with no more than 3 decimal places  OR postcodes:
//  (@ = Letter, # = Number)
// United Kingdom  'uk'  'uk.postcode'
// United States 'us'  'us.#####'
// Example: Current Weather and UK postcode
// http://api.weatherunlocked.com/api/current/uk.G3 8ND?app_id=APP_ID&app_key=APP_KEY
// Example: Forecast Weather and US zipcode
// http://api.weatherunlocked.com/api/forecast/us.33109?app_id=APP_ID&app_key=APP_KEY
//  and local language :
// Example: Forecast Weather for NY with Italian descriptions
// http://api.weatherunlocked.com/api/forecast/40.7,-74?lang=it&app_id=APP_ID&app_key=APP_KEY
// Географические координаты Калининграда (в скобках — в градусах и десятичных минутах)
// 54° 43' 12" (54° 43' 27) северной широты
// 20° 31' 18" (20° 31' 44) восточной долготы


class App extends React.Component {
    // depricated method in React >=v.16 !!!!! "constructor ditched altogether"
    // constructor(props) {
    //   super(props);
    //   this.state = {

    //   }
    // }
     state = {
cloudtotal: undefined,    //index
feelslike: undefined,    //C
humidity: undefined,    //%
seaLevelPressure:  undefined,   //millibars
temperature: undefined,    //C
winddir_compass: undefined,    //string
windSpeed: undefined,    //ms
description: undefined ,   //string
error: undefined
     }
  getWeather = async (e) => {

    e.preventDefault();
    // const country = e.target.elements.country.value;
    // const city = e.target.elements.city.value;
    const latitude = e.target.elements.latitude.value;
    const longtitude = e.target.elements.longtitude.value;

    // здесь требуется конвертация страны\ города в широту и долготу (Российских почт. индексов не предусмотрено)

    const api_call = await fetch(`http://api.weatherunlocked.com/api/current/${latitude},${longtitude}?lang=it&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    if(latitude && longtitude) {
      this.setState({
      cloudtotal: data.cloudtotal_pct,    //index
      feelslike: data.feelslike_c,    //C
      humidity: data.humid_pct,    //%
      seaLevelPressure:  data.slp_mb,   //millibars
      temperature: data.temp_c,    //C
      winddir_compass: data.winddir_compass,    //string
      windSpeed: data.windspd_ms,    //ms
      description: data.wx_desc ,   //string
      error: ""
    });
    } else {
      this.setState({
      cloudtotal: undefined,    //index
      feelslike: undefined,    //C
      humidity: undefined,    //%
      seaLevelPressure:  undefined,   //millibars
      temperature: undefined,    //C
      winddir_compass: undefined,    //string
      windSpeed: undefined,    //ms
      description: undefined ,   //string
      error: "Enter the coords, please!"
    });
    }
  }

  render() {
    return (
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather cloudtotal={this.state.cloudtotal}    //index
              feelslike = {this.state.feelslike}    //C
              humidity = {this.state.humidity}    //%
              seaLevelPressure =  {this.state.seaLevelPressure}   //millibars
              temperature = {this.state.temperature}    //C
              winddir_compass = {this.state.winddir_compass}    //string
              windSpeed = {this.state.windSpeed}    //ms
              description = {this.state.description }   //string
              error = {this.state.error } />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>);
  }
};

export default App;


