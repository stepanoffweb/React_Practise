// 1Очищать state и input при нажатии на батон () 2Weather component валидация нулевых значений

import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import {API_KEY, APP_ID, BASE_PATH, LOCAL_WEATHER_TYPE} from './constants';

class App extends React.Component {

    state = {};

  getWeather = async (e) => {
    e.preventDefault();

    const first_param = e.target.elements.first_param.value,
        second_param = e.target.elements.second_param.value;

    if(first_param && second_param) {
    let separator = (/[0-9]./.test(+first_param)) ? ',' : '.';

    // here we need to convert the latitude and the longitude to the town/ country names  (Russian post indexes are not available)
    const api_call = await fetch(`${BASE_PATH}/${LOCAL_WEATHER_TYPE}/${first_param}${separator}${second_param}?lang=it&app_id=${APP_ID}&app_key=${API_KEY}`),
        data = await api_call.json();
        this.setState({
            cloudtotal: data.cloudtotal_pct,
            feelslike: data.feelslike_c,
            humidity: data.humid_pct,
            seaLevelPressure:  data.slp_mb,
            temperature: data.temp_c,
            winddir_compass: data.winddir_compass,
            windSpeed: data.windspd_ms,
            description: data.wx_desc ,
            error: ""
        });
        } else {
            this.setState({
                // cloudtotal: undefined,
                // feelslike: undefined,
                // humidity: undefined,
                // seaLevelPressure:  undefined,
                // temperature: undefined,
                // winddir_compass: undefined,
                // windSpeed: undefined,
                // description: undefined,
                error: "Enter the coords, please!",
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
                                <Form getWeather={ this.getWeather }/>
                                <Weather cloudtotal={ cloudtotal }
                                    feelslike = { feelslike }
                                    humidity = { humidity }
                                    seaLevelPressure =  { seaLevelPressure }
                                    temperature = { temperature }
                                    winddir_compass = { winddir_compass }
                                    windSpeed = { windSpeed }
                                    description = { description }
                                    error = { error } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>);
  }
};

export default App;
