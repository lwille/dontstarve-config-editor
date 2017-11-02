import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Settings from './Settings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Server Config Editor Thingy</h1>
        </header>
        <p className="App-intro">
            <Settings/>
        </p>
      </div>
    );
  }
}

export default App;
