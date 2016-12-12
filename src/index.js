import React, {Component} from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Home from './Home';
import Nav from './navBar';
import Skills from './Skills';
import Projects from './Projects';
import NotFound from './404';
import Experience from './experience';
require ('./styles/style.scss');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="skills" component={Skills} />
      <Route path="skills/:parent" component={Skills} />
      <Route path="projects" component={Projects} />
      <Route path="projects/:parent" component={Projects} />
      <Route path="experience" component={Experience} />
      <Route path="*" component={NotFound} />
    </Route>
</Router>
), document.getElementById('root'))
