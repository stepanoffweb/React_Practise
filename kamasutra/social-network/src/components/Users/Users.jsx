import React from 'react'
import axios from 'axios'
import s from './Users.module.css'
import User from './User/User'

const Users = ({callFollow, callUnfollow, callSetUsers, users }) => {
  console.log(users);//[Array(4)] 0: (4) [{…}, {…}, {…}, {…}] length: 1
  if(!users.length) {
    console.log('gogo');
    // callSetUsers({
    //   users: [
    //   {id: 0, name: 'Blonda R.', status: "I'm so pretty...", country: 'Belarus' , city: 'Brest', followed: true, pic: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg'},
    //   {id: 1, name: 'Blonda S.', status: "I do not currently posess the ability to can...", country: 'Belarus' , city: 'Brest', followed: false, pic: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg'},
    //   {id: 2, name: 'Blonda D.', status: "I'm so pretty...", country: 'Belarus' , city: 'Brest', followed: false, pic: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg'},
    //   {id: 3, name: 'Blonda V.', status: "I'm so pretty...", country: 'Belarus' , city: 'Brest', followed: true, pic: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg'},
    //   ]})
  axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    callSetUsers(response.data.items)
  })
  }

  let handleFollow = (id) => { callFollow(id)}
  let handleUnfollow = (id) => {callUnfollow(id)}

  return (
    <div className={s.usersWrapper}>
    {users.map(({id, name, status, country, city, followed, photos:{small}}) => <User key={`${id}-${status}`} userId={id} name={name} status={status}
      country={country} city={city} followed={followed} pic={small} handleFollow={handleFollow} handleUnfollow={handleUnfollow} /> )}
    <button className={s.show}>Show More</button>
    </div>
    )
}

export default Users;
