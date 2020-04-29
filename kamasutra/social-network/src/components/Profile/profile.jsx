import React from 'react';

import MyPostsContainer from './MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css';


export default function Profile() {
    return (
      <div className={style.content}>

        <ProfileInfo />
        <MyPostsContainer  />
      </div>
    )
}
