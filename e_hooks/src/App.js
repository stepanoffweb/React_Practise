import React from 'react';

import UseState from './UseState';
import UseRef from './UseRef';
import UseMemo from './UseMemo';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container" >
      <UseState />
      <UseRef />
      <UseMemo />

      </div>
    </div>
  );
}

export default App;
