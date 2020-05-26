import React from 'react'
import {Field, reduxForm} from 'redux-form'

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
            <Field component="input" type="checkbox" name="rememberme" id="loginMemo" />
            <label htmlFor="loginMemo">Remember me</label>
        </div>
        <button>Login</button>
    </form>
}

LoginForm =  reduxForm({
    form: 'loginForm'
})(LoginForm)

export default function Login(props) {
     let mySubmit = (formData) => {
        // console.log(typeof formData.rememberme)
        let login = formData.login
        let pass = formData.password
        let logMemo = formData.rememberme
        props.getAuthData(login, pass, logMemo)
        for (let key in formData) {
            formData[key] = '' //для checked - приведение типов к false
        }
    }
    return  <LoginForm onSubmit={mySubmit} />
}
