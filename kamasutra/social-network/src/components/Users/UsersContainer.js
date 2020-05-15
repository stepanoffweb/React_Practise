import React from 'react'
import * as axios from 'axios'
import {connect} from 'react-redux'

import Users from './Users'
import Preloader from '../Preloader/Preloader'
import {Follow, Unfollow, SetUsers, SetCurrentPage, SetTotalCount,
SetFetching, SetFollowingProgress} from '../../redux/users-reducer'
import {usersAPI} from '../../api/api'

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
    this.props.SetFetching(!this.props.isFetching)
    debugger
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.SetUsers(data.items)
        this.props.SetTotalCount(data.totalCount)
    this.props.SetFetching(!this.props.isFetching)
      })}

  handleClickPage = (pageNumber) => {
    this.props.SetCurrentPage(pageNumber)
    this.props.SetFetching(!this.props.isFetching)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.SetUsers(data.items)
        this.props.SetFetching(!this.props.isFetching)
      })}

  handleFollow = (id) => {
    this.props.SetFollowingProgress(true, id)
    usersAPI.postFollow(id).then(response => {
        if(response.data.resultCode === 0){ //из документации на API
          this.props.Follow(id)}
    this.props.SetFollowingProgress(false, id)
        })}

  handleUnfollow = (id) => {
    this.props.SetFollowingProgress(true, id)
    usersAPI.deleteFollow(id).then(response => {
          if(response.data.resultCode === 0){
            this.props.Unfollow(id)}
    this.props.SetFollowingProgress(false, id)
        })}

          render() {
              console.dir('UsersContainer props:', {...this.props})
              return <>
                  {this.props.isFetching ? <Preloader /> : null}
                  <Users {...this.props}  handleUnfollow={this.handleUnfollow} handleFollow={this.handleFollow}
                  handleClickPage={this.handleClickPage} />
              </>
          }
}

const mapStateToProps = (state) => ({  // console.log(state);// {profilePage: {…}, messagePage: {…}, usersPage: {…}}
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
        SetUsers,
        SetCurrentPage,
        SetTotalCount,
        SetFetching,
        SetFollowingProgress
    })(UsersContainer)

