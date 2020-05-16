import React from 'react';
import {connect} from 'react-redux'

import Header from './header'
import {getAuthData} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData()
    // usersApi.getAuth.then(response => {
    //     if(response.data.resultCode === 0){
    //         let {id, email, login} = response.data.data
    //         this.props.SetUserAuthData(id, email, login)
    //     }
    //   })
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

export default connect(mapStateToProps, {getAuthData})(HeaderContainer)
