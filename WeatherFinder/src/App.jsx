// 1.Убрать инициализацию stste пустыми значениями 2.Убрать константы в компонент 3.составить регулярку для подставления разделителя координат - , страны и индекса - . 4.Очищать state при нажатии на батон ()

import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "95b86822741aadf615e1da0ac5ded8b3",
    APP_ID = "ab684c34",
    BASE_PATH = 'http://api.weatherunlocked.com/api',
    LOCAL_WEATHER_TYPE = 'current';
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

class App extends React.Component {

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

    const first_param = e.target.elements.first_param.value,
        second_param = e.target.elements.second_param.value;
    let separator = (/[0-9]./.test(+first_param)) ? ',' : '.';

    // here we need to convert the latitude and the longitude to the town/ country names  (Russian post indexes are not available)
    const api_call = await fetch(`${BASE_PATH}/${LOCAL_WEATHER_TYPE}/${first_param}${separator}${second_param}?lang=it&app_id=${APP_ID}&app_key=${API_KEY}`),
        data = await api_call.json();

    if(first_param && second_param) {
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
    const {cloudtotal, feelslike, humidity, seaLevelPressure, temperature, winddir_compass,
     windSpeed, description, error} = this.state;
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
                                <Weather cloudtotal={cloudtotal}
                                    feelslike = {feelslike}
                                    humidity = {humidity}
                                    seaLevelPressure =  {seaLevelPressure}
                                    temperature = {temperature}
                                    winddir_compass = {winddir_compass}
                                    windSpeed = {windSpeed}
                                    description = {description }
                                    error = {error } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>);
  }
};

export default App;
