import React from 'react'
import {Field, reduxForm} from 'redux-form'
// import {NavLink} from 'react-router-dom'




let LoginForm = (props) => {
    const {handleSubmit} = props
    // console.log(props);


    return <form onSubmit={handleSubmit} >
        <div>
            <Field component="input" type="text" placeholder="Login" name="login" />
        </div>
        <div>
            <Field component="input" type="text" placeholder="Password" name="password" />
        </div>
        <div>
            <Field component="input" type="checkbox" name="rememberme" id="loginChecker" />
            <label htmlFor="loginChecker">Remember me</label>
        </div>
        <button>Login</button>
    </form>
}

LoginForm =  reduxForm({
    form: 'loginForm'
})(LoginForm)

export default function Login(props) {
     let mySubmit = (formData) => {
        console.log(formData)
    }


    return  <LoginForm onSubmit={mySubmit} />
}
