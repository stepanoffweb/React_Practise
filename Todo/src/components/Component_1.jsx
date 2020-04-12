import React, {Component} from 'react'

class Component1 extends Component {
  render () {
      return <h1>Hello, React + Reduce!!!</h1>
  }
}

export const Item2 = () => {
  return (
    <div className="dubble-container">
      <h2>And dubble hello!!!</h2>
    </div>
  )
}
React.createElement('div', null, 'Simple text');
React.createElement('input', {Classname: 'just-class'});

export default Component1;
//===========

// const Counter = (props) => {
//     <div>`Counter component. Counter value is: ${props.counter}` </div>
// }
//v16
// class CounterButton extends Component {
//    state = {
//        counter: 0,
//    }// если state зависит от передаваемых props - конструктор НУЖЕН

//    handleClick = () => {}

//    render() {
//        const {counter} = this.state;
//        return (
//            <Counter counter={counter} number={5} string='str' func={() => {}} />
//         )
//    }
// }






