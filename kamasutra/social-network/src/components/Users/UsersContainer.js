import React from 'react'
import {connect} from 'react-redux'

import Users from './Users'
import Preloader from '../Preloader/Preloader'
import {Follow, Unfollow, getUsers} from '../../redux/users-reducer'

class UsersContainer extends React.Component {

  // state = {{Follow, Unfollow, SetUsers, SetTotalCount, SetFetching, SetFollowingProgress, users }} // this.props - конструктор невидим, но он - есть!
//   Follow: ƒ ()
// SetCurrentPage: ƒ ()
// SetFetching: ƒ ()
// SetFollowingProgress: ƒ ()
// SetTotalCount: ƒ ()
// SetUsers: ƒ ()
// Unfollow: ƒ ()
// currentPage: 2
// followingInProgress: false
// isFetching: false
// pageSize: 20
// totalUsersCount: 0
// users: []
  componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
}

  handleClickPage = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize)
}

  handleFollow = (id) => {
      this.props.Follow(id)
}

  handleUnfollow = (id) => {
      this.props.Unfollow(id)
}

          render() {
              // console.log('UsersContainer props:', {...this.props})

              return <>
                  {this.props.isFetching ? <Preloader /> : null}
                  <Users {...this.props}  handleUnfollow={this.handleUnfollow} handleFollow={this.handleFollow}
                  handleClickPage={this.handleClickPage} />
              </>
          }
}

const mapStateToProps = (state) => ({     // console.log(state);// {profilePage: {…}, messagePage: {…}, usersPage: {…}}
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    })

export default connect(mapStateToProps, {
         Follow,
        Unfollow,
        getUsers
    })(UsersContainer)

