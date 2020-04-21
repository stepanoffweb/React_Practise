import React from 'react';

import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css';


export default function Profile({posts}) {
    return (
      <div className={style.content}>

        <ProfileInfo />
        <MyPosts  posts={posts} />
      </div>
    )
}
