import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Hello name="J">
          <p>This is from the first children props</p>
          <p>This is from the second children props</p>
        </Hello>
        <Hello name="N">
          <button>Click</button>
        </Hello>
        <Hello name="X"/>
      </div>
    );
  }
}

export default App;
