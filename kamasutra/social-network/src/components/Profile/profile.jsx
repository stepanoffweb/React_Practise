import React from 'react';

import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css';


export default function Profile({posts, addPost, showLetters, newPostText}) {
    return (
      <div className={style.content}>

        <ProfileInfo />
        <MyPosts  posts={posts} addPost={addPost} showLetters={showLetters} showLetters={showLetters} newPostText={newPostText} />
      </div>
    )
}
