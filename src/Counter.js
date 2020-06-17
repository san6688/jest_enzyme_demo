import React from 'react';
import './App.css';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = { counterVal: 0}
  }
  
  render(){
  return (
    <div className="App">
      <h5>My Counter App</h5>
      <p>This is a demo for Jest-Enzyme</p>
      <h6 id="counterValue">{this.state.counterVal}</h6>
      <button id="increment_btn" onClick={() => this.setState({counterVal: this.state.counterVal + 1})}>Increment</button>
      <button id="decrement_btn" onClick={() => this.setState({counterVal: this.state.counterVal - 1})}>Decrement</button>
    </div>
  );
  }
}

export default Counter;