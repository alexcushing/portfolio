import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;


//figure out how to recreate Link.js