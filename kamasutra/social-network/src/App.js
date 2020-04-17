import React from 'react';
import logo from './logo.png';
import hero from './fireball_1200x226.jpg';
import './App.css';

const App = () => {
  return     <div className="app-wrapper">
      <header className="header">
        <img src={logo} alt="logo"/>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <div className="content">
        <img src={hero} alt="hero" />
        <h1>Some Content</h1>
        <div className="content-head">
          <img src="https://sun9-6.userapi.com/QqHBpjLe2yLFnKJ58RKzAm5Ha0JrcRpCI70M5A/HL3ROS3t4h0.jpg?ava=1" alt="avatar" />
          <div className="descr"></div>
        </div>
        <div className="content-posts">My Posts</div>
        <div className="post">New Post</div>
        <div className="older-posts">
          <div className="older-post">Post 3</div>
          <div className="older-post">Post 2</div>
          <div className="older-post">Post 1</div>
        </div>
      </div>
    </div>  ;
}

export default App;
