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
                <a>
                  <Link to="/">
                    Home
                  </Link></a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <Link to="/skills">
                    Skills
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <Link to="/projects">
                    Projects
                  </Link>
                </a>
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
                <a>
                  <Link to="/">
                    Home
                  </Link></a>
              </li>
              <li className="nav-item active">
                <a href="#">
                  <Link to="/skills">
                    Skills
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <Link to="/projects">
                    Projects
                  </Link>
                </a>
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
                <a>
                  <Link to="/">
                    Home
                  </Link></a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <Link to="/skills">
                    Skills
                  </Link>
                </a>
              </li>
              <li className="nav-item active">
                <a href="#">
                  <Link to="/projects">
                    Projects
                  </Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )
    }

  }
});



export default Nav;
