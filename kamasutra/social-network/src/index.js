import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import store from './redux/redux-store'
import * as serviceWorker from './serviceWorker';

export const Rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

Rerender(store.getState())
store.subscribe(() => Rerender(store.getState()))
