import React from 'react'
import Users from './Users'
import {Follow, Unfollow, SetUsers, SetCurrentPage, SetTotalCount,
SetFetching} from '../../redux/users-reducer'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({  // console.log(state);// {profilePage: {…}, messagePage: {…}, usersPage: {…}}
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    })


const UsersContainer = connect(mapStateToProps, {
         Follow,
        Unfollow,
        SetUsers,
        SetCurrentPage,
        SetTotalCount,
        SetFetching,
    })(Users)


export default UsersContainer;
