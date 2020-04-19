import React from 'react';

import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header';
import Profile from './components/Profile/profile';
import classes from './App.module.css';

const App = () => {
  return (
  <div className={classes.appWrapper}>
    <Header />
    <Navbar />
    <Profile />

  </div>  );
}

export default App;
