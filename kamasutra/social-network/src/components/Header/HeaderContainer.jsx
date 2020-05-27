import React from 'react';
import {connect} from 'react-redux'

import Header from './header'
import {getAuthData, setLogout} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData()
}

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

export default connect(mapStateToProps, {getAuthData, setLogout})(HeaderContainer)
