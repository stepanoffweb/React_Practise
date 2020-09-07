import React from 'react';

import './App.css';
import useViewportWidth from './useViewportWidth'

function App() {
  const viewportWidth = useViewportWidth()

  return (
    <div className="App">
      <header className="App-header">
        <p>The viewport width is {viewportWidth} </p>
      </header>
    </div>
  );
}

export default App;
