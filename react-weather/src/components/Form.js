import React from 'react';

// class Form extends React.Component {
//     render() {
//         return (
//         <div>
//             <h1>Form</h1>
//         <form onSubmit={this.props.getWeather}>
//             <input type="text" name="latitude" placeholder="(city)latitude"></input>
//             <input type="text" name="longtitude" placeholder="(country)longtitude"></input>

//             <button>Give me the weather!</button>
//         </form>
//         </div>);
//     }
// };  УСТАРЕЛО, "stateless expressions" на замену:

const Form = props => ( // parenthesis instead of curly braces when explicitly return one element
        <div>
            <h1>Form</h1>
        <form onSubmit={props.getWeather}>
            <input type="text" name="latitude" placeholder="(city)latitude"></input>
            <input type="text" name="longtitude" placeholder="(country)longtitude"></input>

            <button>Give me the weather!</button>
        </form>
        </div>
        );

export default Form;
