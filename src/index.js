import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './App';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import './index.css';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="skills" component={Skills}/>
      <Route path="projects" component={Projects}/>
    </Route>
  </Router>
), document.getElementById('root'))