import React from 'react'
import axios from 'axios'
import s from './Users.module.css'
import User from './User/User'

class Users extends React.Component {
  // state = {{callFollow, callUnfollow, callSetUsers, users }} // this.props - конструктор невидим, но он - есть!
  componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.callSetUsers(response.data.items)
        this.props.callSetTotalCount(response.data.totalCount)
      })
      // .catch((err) => {<h1>ERROR: ${err} </h1>})
  }

  handleFollow = (id) => { this.props.callFollow(id)}
  handleUnfollow = (id) => {this.props.callUnfollow(id)}
  handleClickPage = (pageNumber) => {
    this.props.callSetCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.callSetUsers(response.data.items)
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

    return (
      <div className={s.usersWrapper}>
      {pages.map(p => {return <span key={p} className={this.props.currentPage === p ? s.selected : undefined} onClick={() => this.handleClickPage(p)} >{p}</span>})}
      {this.props.users.map(({id, name, status, country, city, followed, photos:{small}}) => <User key={`${id}-${status}`} userId={id} name={name} status={status}
        country={country} city={city} followed={followed} pic={small} handleFollow={this.handleFollow} handleUnfollow={this.handleUnfollow} /> )}
      <button className={s.show}>Show More</button>
      </div>
      )
  }
}

export default Users;
