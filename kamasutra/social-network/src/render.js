import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, showLetters} from './redux/state'
import * as serviceWorker from './serviceWorker';


export let Rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} showLetters={showLetters}  />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
Rerender();
