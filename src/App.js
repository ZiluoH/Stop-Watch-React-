import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React App Stop-Watch</h1>
        </header>
        

        <Timer start={Date.now()}/>
      </div>
    );
  }
}

export default App;
