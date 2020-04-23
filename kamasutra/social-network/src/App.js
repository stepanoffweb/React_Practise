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


const App = ({store}) => {
  return (
<BrowserRouter>
  <div className={styles.appWrapper}>
      <Header />
      <Navbar />
      <div className="appWrapperContent">
         <Route path='/profile' render={() => <Profile posts={store.getState().profilePage.posts} addPost={store.addPost.bind(store)} showLetters={store.showLetters.bind(store)} newPostText={store.getState().profilePage.newPostText} />} />
         <Route path='/dialogs' render={() => <Dialogs dialogItems={store.getState().messagePage.dialogItems} messages={store.getState().messagePage.messages} />} />
         <Route path='/music' component={Music} />
         <Route path='/news' component={News} />
         <Route path='/settings' component={Settings} />
      </div>

    </div>
  </BrowserRouter>
   );
}

export default App;
