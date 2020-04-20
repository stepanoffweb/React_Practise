import React from 'react';

import MyPosts from './MyPosts/MyPosts'
import hero from './fireball_1200x226.jpg';
import style from './profile.module.css';


export default function Profile() {
    return (
      <div className={style.content}>
        <img src={hero} alt="hero" className={style.hero} />
        <h1>Some Content</h1>
        <div className={style.contentHead}>
          <img src="https://sun9-6.userapi.com/QqHBpjLe2yLFnKJ58RKzAm5Ha0JrcRpCI70M5A/HL3ROS3t4h0.jpg?ava=1" alt="avatar" />
          <div className={style.descr}></div>
        </div>
        <MyPosts />
      </div>
    )
}
