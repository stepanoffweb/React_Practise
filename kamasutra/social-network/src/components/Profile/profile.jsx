import React from 'react';

import MyPostsContainer from './MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css';


export default function Profile({posts, dispatch, newPostText}) {
    return (
      <div className={style.content}>

        <ProfileInfo />
        <MyPostsContainer  posts={posts} dispatch={dispatch} newPostText={newPostText} />
      </div>
    )
}
