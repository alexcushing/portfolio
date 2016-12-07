import React, { Component } from 'react';
import Home from './Home';
import Skills from './Skills';
import Nav from './navBar';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;


//figure out how to recreate Link.js