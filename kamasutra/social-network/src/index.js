import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let likeCount = 0;
function handleClick(e) {
  likeCount++;
  e.target.innerHTML = `Like ${likeCount}`;
}
const posts = [
  {id: 0,message: "Hi, it's my first post!", likeCount: 0, onClick: handleClick},
  {id: 1,message: "You'r welcome, my friend!!!!",likeCount: 0, onClick: handleClick},
  {id: 2,message: "Ammmmm...", likeCount: 0, onClick: handleClick},
]

const dialogItems = [
  {name: "Name-1", id: 0},
  {name: "Name-2", id: 2},
  {name: "Name-3", id: 3},
  {name: "Name-4", id: 4},
  {name: "Name-5", id: 5},
  {name: "Name-6", id: 6},
]
const messages = [
  {text: "What's up?", id: 0},
  {text: "Yo!!!" , id: 1},
  {text: "How is Your webDev?", id: 2},
  {text: "Who are you??", id: 3},
  ]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogItems={dialogItems} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
