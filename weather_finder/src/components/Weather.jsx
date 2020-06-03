    import React from 'react';

export const Weather = ({cloudtotal, feelslike, humidity, seaLevelPressure, temperature, winddir_compass, windSpeed, description, error}) =>
    <div className="weather__info">
        {+cloudtotal &&
            <p className="weather__key">Index cloudy: <span className="weather__value">{ cloudtotal }</span></p>}
        {+feelslike &&
            <p className="weather__key">Feelslike: <span className="weather__value">{ feelslike } C</span></p>}
        {humidity &&
            <p className="weather__key">Humidity: <span className="weather__value">{ humidity } %</span></p>}
        {seaLevelPressure &&
            <p className="weather__key">Pressure: <span className="weather__value">{ seaLevelPressure } millibars</span></p>}
        {+temperature &&
            <p className="weather__key">Temperature: <span className="weather__value">{ temperature } C</span></p>}
        {winddir_compass &&
            <p className="weather__key">Wind direction: <span className="weather__value">{ winddir_compass }</span></p>}
        {''+windSpeed &&
            <p className="weather__key">Wind speed: <span className="weather__value">{ windSpeed } m/sec</span></p>}
        {description &&
            <p className="weather__key">Conditions: <span className="weather__value">{ description }</span></p>}
        <p className="weather__error">{ error }</p>
    </div> ;
