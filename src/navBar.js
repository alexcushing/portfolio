import React, { Component } from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


class Nav extends Component {
    constructor(props) {
        super(props);
        this.getClassName = this.getClassName.bind(this);
    }
 
    getClassName(url) {
        return location.pathname === url ? 'nav-item active' : 'nav-item';
    }
 
    render() {
      const classNames = {
          home: this.getClassName('/'),
          skills: this.getClassName('/skills'),
          projects: this.getClassName('/projects'),
          experience: this.getClassName('/experience')
      };
 
      return (
          <div>
            <nav className="navbar navbar-default navbar-light bg-faded limitWidth">
              <ul className="nav navbar-nav">
                <li className={classNames.home}>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                </li>
                <li className={classNames.skills}>
                    <Link className="nav-link" to="/skills">
                      Skills
                    </Link>
                </li>
                <li className={classNames.projects}>
                    <Link className="nav-link" to="/projects" >
                      Projects
                    </Link>
                </li>
                   <li className={classNames.experience}>
                    <Link className="nav-link" to="/experience">
                      Experience
                    </Link>
                </li>
              </ul>
            </nav>
          </div>
        );
    }
}



export default Nav;
