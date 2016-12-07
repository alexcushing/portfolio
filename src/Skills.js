import React from 'react';

import Nav from './navBar';
import Contact from './Contact';

const Skills = () => {
  return (
      <div>
        <Nav name="Skills" />
        <div className="panel panel-default limitWidth homeBox projFix">
          <div className="mainSkills">
            <div className="skillBlock">
              <h2 className="skillTitle expert">Expert</h2>
            <hr className ="line exp" />
              <ul>
                <li>
                  C/C++
                </li>
                  <li>
                    Python
                  </li>
                <li>
                  JavaScript
                </li>
                <li>
                  JQuery
                </li>
                <li>
                  CSS3 / SASS
                </li>

                <li>
                  HTML5
                </li>
                <li>
                  Bootstrap
                </li>
              </ul>
            </div>
            <div className="skillBlock">
              <h2 className="skillTitle proficient">Proficient</h2>
            <hr className ="line prof"/>
              <ul>
                  <li>
                    Django
                  </li>
                <li>
                  Jade / Pug
                </li>
                <li>
                  MongoDB
                </li>
              </ul>
            </div>
            <div className="skillBlock">
              <h2 className="skillTitle competent">Competent</h2>
                <hr className ="line comp"/>
              <ul>
                <li>
                  ReactJS
                </li>
                  <li>
                    NodeJS
                  </li>
                <li>
                  SQL
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Contact value="acushing@cs.uml.edu" />
      </div>
  );
}

export default Skills;
