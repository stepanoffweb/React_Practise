import React from 'react'
import Users from './Users'
import {createActionFollow, createActionUnfollow, createActionSetUsers} from '../../redux/users-reducer'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    // console.log(state);// {profilePage: {…}, messagePage: {…}, usersPage: {…}}
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callFollow: (id) => dispatch(createActionFollow(id)),
        callUnfollow: (id) => dispatch(createActionUnfollow(id)),
        callSetUsers: (state) => dispatch(createActionSetUsers(state))
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;
