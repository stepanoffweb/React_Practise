import React, {useEffect, useRef, useState} from 'react';

import './App.css';

function App() {
  const [name, setName] = useState('Vasya')
  const renderCount = useRef(1)
  const inputRef = useRef()
  const prevName = useRef(name)

  useEffect(() => {
    renderCount.current++
  })

  useEffect(() => {
    prevName.current = name
  })

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div className="App">
      <input ref={inputRef} type="text" onChange={e => setName(e.target.value)} />
      <p>My name is {name} and it used to be {prevName.current} </p>
      <p>I rendered {renderCount.current} times</p>
      <button onClick={focus} >Focus</button>
    </div>
  );
}

export default App;
