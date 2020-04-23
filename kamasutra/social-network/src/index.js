import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/state'
import * as serviceWorker from './serviceWorker';

export const Rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

Rerender(store.getState())
store.subscribe(Rerender)
