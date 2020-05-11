import React from 'react'
import axios from 'axios'
import s from './Users.module.css'
import User from './User/User'
import Preloader from '../Preloader/Preloader'

class Users extends React.Component {
  // state = {{callFollow, callUnfollow, callSetUsers, users }} // this.props - конструктор невидим, но он - есть!
  componentDidMount() {
    this.props.SetFetching(!this.props.isFetching)
    // debugger
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.SetUsers(response.data.items)
        this.props.SetTotalCount(response.data.totalCount)
    this.props.SetFetching(!this.props.isFetching)
      })
      // .catch((err) => {<h1>ERROR: ${err} </h1>})
  }

  handleFollow = (id) => { this.props.Follow(id)}
  handleUnfollow = (id) => {this.props.Unfollow(id)}
  handleClickPage = (pageNumber) => {
    this.props.SetCurrentPage(pageNumber)
    this.props.SetFetching(!this.props.isFetching)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.SetUsers(response.data.items)
        this.props.SetFetching(!this.props.isFetching)
      })
  }
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
      let i = 1
      while(i <= pagesCount) {
        pages.push(i)
        i++
      }
    // debugger
    if (this.props.isFetching) return <Preloader />

    return (
      <div className={s.usersWrapper}>
      {pages.map(p => <span key={p} className={`${s.pagination} ${this.props.currentPage === p ? s.selected : ''}`} onClick={() => this.handleClickPage(p)} >{p}</span>)}
      {this.props.users.map(({id, name, status, country, city, followed, photos:{small}}) => <User key={`${id}-${status}`} userId={id} name={name} status={status}
        country={country} city={city} followed={followed} pic={small} handleFollow={this.handleFollow} handleUnfollow={this.handleUnfollow} /> )}
      <button className={s.show}>Show More</button>
      </div>
      )
  }
}

export default Users;
