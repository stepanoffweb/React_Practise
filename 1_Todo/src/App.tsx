import React from 'react';
import {Navbar} from './components/Navbar'
import {TodoForm} from './components/TodoForm'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
}

export default App;
