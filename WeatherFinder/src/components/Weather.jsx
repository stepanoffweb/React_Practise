import React from 'react';

const Weather = props => (
    <div className="weather__info">
        {props.cloudtotal && <p className="weather__key">Index cloudy: <span className="weather__value">{props.cloudtotal}</span></p>}
        {props.feelslike && <p className="weather__key">Feelslike: <span className="weather__value">{props.feelslike} C</span></p>}
        {props.humidity && <p className="weather__key">Humidity:<span className="weather__value">{props.humidity} %</span></p>}
        {props.seaLevelPressure && <p className="weather__key">Pressure: <span className="weather__value">{props.seaLevelPressure} millibars</span></p>}
        {props.temperature && <p className="weather__key">Temperature: <span className="weather__value">{props.temperature} C</span></p>}
        {props.winddir_compass && <p className="weather__key">Wind direction: <span className="weather__value">{props.winddir_compass}</span></p>}
        {props.windSpeed && <p className="weather__key">Wind speed: <span className="weather__value">{props.windSpeed} m/sec</span></p>}
        {props.description && <p className="weather__key">Conditions: <span className="weather__value">{props.description}</span></p>}
        <p className="weather__error">{props.error}</p>
    </div>
    );

export default Weather;
