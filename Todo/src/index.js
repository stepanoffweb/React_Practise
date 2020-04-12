import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>

  </Fragment>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
