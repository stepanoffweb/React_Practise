import React from 'react';

const Form = ({getWeather}) =>
        <div>
            <h1>Local weather</h1>
            <form onSubmit={getWeather}>
                <input type="text" name="first_param" placeholder="country or latitude"></input>
                <input type="text" name="second_param" placeholder="postcode or longtitude"></input>

                <button>Give me the weather!</button>
            </form>
        </div>
        ;

export default Form;
