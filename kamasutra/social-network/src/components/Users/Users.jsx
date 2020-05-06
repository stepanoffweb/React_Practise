import React from 'react'
import axios from 'axios'
import s from './Users.module.css'
import User from './User/User'

class Users extends React.Component {
  // state = {{callFollow, callUnfollow, callSetUsers, users }} // this.props - конструктор невидим, но он - есть!
  constructor(props) {
    super(props);
      alert ('New!!!')
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.callSetUsers(response.data.items)})
  }

  handleFollow = (id) => { this.props.callFollow(id)}
  handleUnfollow = (id) => {this.props.callUnfollow(id)}
  render() {
    debugger
    return (
      <div className={s.usersWrapper}>
      {/*<button onClick={this.getUsers} >GET USERS</button>*/}
      {this.props.users.map(({id, name, status, country, city, followed, photos:{small}}) => <User key={`${id}-${status}`} userId={id} name={name} status={status}
        country={country} city={city} followed={followed} pic={small} handleFollow={this.handleFollow} handleUnfollow={this.handleUnfollow} /> )}
      <button className={s.show}>Show More</button>
      </div>
      )

  }

}

export default Users;
