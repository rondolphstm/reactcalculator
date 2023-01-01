import React, {Componets} from 'react';
import './App.css';
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Clearbutton } from './components/Clearbutton'

class App extends Componets() {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

addToInput = val => {
  this.setState({input: this.state.input + val});
};

  render() { // lines 19 and above is this issue i just cant figure out what exactly is wrong smh 
  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={this.state.input}/>
        <div className='row'>
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>x</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={this.addToInput}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className='row'>
          <Clearbutton handleclear= {()=> this.setState({input: ""})} >Clear</Clearbutton>
        </div>
        </div>
      </div>
  );
}
}
export default App;
