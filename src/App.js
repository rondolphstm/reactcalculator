import React, {componets} from 'react';
import './App.css';
import { Button } from './components/Button';
import {Input} from './components/Input'
import {Clearbutton} from './components/Clearbutton'

class App extends componets() {
  constructor(props){
    super(props);
    this.state = {
      input: ""
    };
  }

addToInput = val =>{
  this.setState({input: this.state.input + val});
}

  render(){
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
        <div className='row'>
          <button handleClick={this.addToInput}>7</button>
          <button handleClick={this.addToInput}>8</button>
          <button handleClick={this.addToInput}>9</button>
          <button handleClick={this.addToInput}>/</button>
        </div>
        <div className='row'>
          <button handleClick={this.addToInput}>4</button>
          <button handleClick={this.addToInput}>5</button>
          <button handleClick={this.addToInput}>6</button>
          <button handleClick={this.addToInput}>x</button>
        </div>
        <div className='row'>
          <button handleClick={this.addToInput}>1</button>
          <button handleClick={this.addToInput}>2</button>
          <button handleClick={this.addToInput}>3</button>
          <button handleClick={this.addToInput}>+</button>
        </div>
        <div className='row'>
          <button handleClick={this.addToInput}>.</button>
          <button handleClick={this.addToInput}>0</button>
          <button handleClick={this.addToInput}>=</button>
          <button handleClick={this.addToInput}>-</button>
        </div>
        <div className='row'>
          <Clearbutton handleclear={()=> this.setState({input: ""})}>Clear</Clearbutton>
        </div>
      </div>
    </div>
  );
}
}
export default App;
