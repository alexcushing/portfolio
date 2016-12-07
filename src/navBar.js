import React, { Component } from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'


class Nav extends Component {
    constructor(props) {
        super(props);
    }
 
    getClassName(url) {
        return this.props.location.pathname === url ? 'nav-item active' : 'nav-item';
    }
 
    render() {
      const classNames = {
          home: this.getClassName('/login'),
          skills: this.getClassName('/skills'),
          projects: this.getClassName('/projects')
      };
 
      return (
          <div>
            <nav className="navbar navbar-default navbar-light bg-faded limitWidth">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link className={classNames.home} to="/">
                      Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={classNames.skills} to="/skills">
                      Skills
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={classNames.projects} to="/projects">
                      Projects
                    </Link>
                </li>
              </ul>
            </nav>
          </div>
        );
    }
}



export default Nav;
