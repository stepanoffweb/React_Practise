import React from 'react';
import {Route} from 'react-router-dom'

import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/profile';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import styles from './App.module.css';


const App = ({state, dispatch}) => {
  return (
  <div className={styles.appWrapper}>
      <Header />
      <Navbar />
      <div className="appWrapperContent">
         <Route path='/profile' render={() => <Profile  />} />
         <Route path='/dialogs' render={() => <DialogsContainer  />} />
         <Route path='/music' component={Music} />
         <Route path='/news' component={News} />
         <Route path='/settings' component={Settings} />
      </div>

    </div>
   );
}

export default App;
