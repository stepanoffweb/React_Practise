import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'

import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/profile';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import styles from './App.module.css';
import state, {addPost, showLetters} from './redux/state'


const App = () => {
  return (
<BrowserRouter>
  <div className={styles.appWrapper}>
      <Header />
      <Navbar />
      <div className="appWrapperContent">
         <Route path='/profile' render={() => <Profile posts={state.profilePage.posts} addPost={addPost} showLetters={showLetters} newPostText={state.profilePage.newPostText} />} />
         <Route path='/dialogs' render={() => <Dialogs dialogItems={state.messagePage.dialogItems} messages={state.messagePage.messages} />} />
         <Route path='/music' component={Music} />
         <Route path='/news' component={News} />
         <Route path='/settings' component={Settings} />
      </div>

    </div>
  </BrowserRouter>
   );
}

export default App;
