import React from 'react';
import Contact from './Contact';

const Skills = () => {
  return (
      <div>
        <div className="panel panel-default limitWidth homeBox projFix">
          <div className="mainSkills">
            <div className="skillBlock">
              <h2 className="skillTitle expert">Expert</h2>
            <hr className ="line exp" />
              <ul>
                <li>
                  CSS3 / SASS
                </li>
                <li>
                  JavaScript
                </li>
                <li>
                  JQuery
                </li>

                <li>
                  HTML5
                </li>
                  <li>
                    Python
                  </li>
                <li>
                  C/C++
                </li>
              </ul>
            </div>
            <div className="skillBlock">
              <h2 className="skillTitle proficient">Proficient</h2>
            <hr className ="line prof"/>
              <ul>
      
                <li>
                  ReactJS
                </li>
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
