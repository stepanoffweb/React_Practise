import React from 'react';

import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css';


export default function Profile() {
    return (
      <div className={style.content}>

        <ProfileInfo />
        <MyPosts />
      </div>
    )
}
