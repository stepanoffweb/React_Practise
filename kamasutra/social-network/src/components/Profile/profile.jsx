import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css';


export default function Profile(props) {
    // debugger

    return (
        <>
          <div className={style.content}>

            <ProfileInfo profile={props.profile} />
            <MyPostsContainer  />
          </div>
        </>
    )
}

