import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'


var Nav = React.createClass({
  render: function () {
    console.log(this.props.name);
    if(this.props.name == 'index'){
      return(
        <div>
          <nav className="navbar navbar-default navbar-light bg-faded limitWidth">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/skills">
                    Skills
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
              </li>
            </ul>
          </nav>
        </div>
      )
    }

    else if (this.props.name == 'Skills') {
      return(
        <div>
          <nav className="navbar navbar-default navbar-light bg-faded limitWidth">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
              </li>
              <li className="nav-item active">
                  <Link className="nav-link" to="/skills">
                    Skills
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
              </li>
            </ul>
          </nav>
        </div>
      )
    }
    else if (this.props.name == 'Projects') {
      return(
        <div>
          <nav className="navbar navbar-default navbar-light bg-faded limitWidth">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/skills">
                    Skills
                  </Link>
              </li>
              <li className="nav-item active">
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
              </li>
            </ul>
          </nav>
        </div>
      )
    }

  }
});



export default Nav;
