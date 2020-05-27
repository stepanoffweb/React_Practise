import React from 'react'
import {Field, reduxForm} from 'redux-form'

import {Input} from '../common/FormsControls/FormsControls.jsx'
import {required, maxLengthCreator} from '../../utils/validators/validators.js'

const maxLength10 = maxLengthCreator(10)

let LoginForm = (props) => {
    const {handleSubmit} = props

    return <form onSubmit={handleSubmit} >
        <div>
            <Field component={Input} type="text" placeholder="Login" name="login"
            validate={[required, maxLength10]} />
        </div>
        <div>
            <Field component={Input} type="text" placeholder="Password" name="password"
            validate={[required, maxLength10]} />
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
