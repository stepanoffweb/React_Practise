import React from 'react'
import {connect} from 'react-redux'

import Login from './Login'
import {setLogin} from '../../redux/auth-reducer.js'

function LoginContainer(props) {

  let getAuthData = (login, pass, logMemo) => {

    props.setLogin(login, pass, logMemo)
  }
    // console.log(this.props);
    return  <Login getAuthData={getAuthData} />
  }

export default connect(null, {setLogin})(LoginContainer)
