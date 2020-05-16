import React from 'react';
import {Redirect} from 'react-router-dom'


import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css';


export default function Profile(props) {
    // debugger

    return (
        <>
          {!props.isAuth && <Redirect to={'/login'} />}
          <div className={style.content}>

            <ProfileInfo profile={props.profile} />
            <MyPostsContainer  />
          </div>
        </>
    )
}

