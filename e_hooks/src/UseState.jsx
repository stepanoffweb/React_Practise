import React, {useState} from 'react';

function UseState() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="block">
    <div className="container">
    <h1>useState</h1>
    <hr/>
    <h2>Посчитаем. На счетчике: {count}</h2>
    <button className="btn btn-danger" onClick={increment}>Добавить</button>
    <button className="btn btn-success" onClick={decrement}>Отнять</button>
    <p></p>
    </div>
    </div>
  );
}

export default UseState;
