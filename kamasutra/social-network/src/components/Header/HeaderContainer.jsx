import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import Header from './header'
import {SetUserAuthData} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
    }).then(response => {
        if(response.data.resultCode === 0){ //из документации на API
            let {id, email, login} = response.data.data
            this.props.SetUserAuthData(id, email, login)
        }
// debugger
      })}

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email
})

export default connect(mapStateToProps, {SetUserAuthData})(HeaderContainer)
