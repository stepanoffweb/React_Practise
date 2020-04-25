import React from 'react';

import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css';


export default function Profile({posts, dispatch, newPostText}) {
    return (
      <div className={style.content}>

        <ProfileInfo />
        <MyPosts  posts={posts} dispatch={dispatch}  />
      </div>
    )
}
