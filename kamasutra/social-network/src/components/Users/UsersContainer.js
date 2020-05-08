import React from 'react'
import Users from './Users'
import {createActionFollow, createActionUnfollow, createActionSetUsers, createActionSetCurrentPage, createActionSetTotalCount} from '../../redux/users-reducer'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    // console.log(state);// {profilePage: {…}, messagePage: {…}, usersPage: {…}}
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callFollow: (id) => dispatch(createActionFollow(id)),
        callUnfollow: (id) => dispatch(createActionUnfollow(id)),
        callSetUsers: (state) => dispatch(createActionSetUsers(state)),
        callSetCurrentPage: (pageNumber) => dispatch(createActionSetCurrentPage(pageNumber)),
        callSetTotalCount: (totalCount) => dispatch(createActionSetTotalCount(totalCount))
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;
