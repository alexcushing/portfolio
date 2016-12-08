import React, {Component} from 'react';
import Contact from './Contact';

class Skills extends Component {
  constructor(props){
        super(props);
        this.state = {showResults: false};
        this.getClassName = this.getClassName.bind(this);
    }

    getClassName(name) {
        return name === 'putnam' ? 'putnam' : name === 'school' ? 'school' : name === 'self' ? 'self' : 'other';
    }

  render() {
    if (this.props.params.parent === "putnamSkills") {
      var classNames = {
          putnam: this.getClassName('putnam'),
          school: this.getClassName('school'),
          self: this.getClassName('self')
      };
      this.state = {showResults: true};
    }
    else{
      console.log("else");
      var classNames = {
          putnam: this.getClassName('other'),
          school: this.getClassName('other'),
          self: this.getClassName('other')
      };
      this.state = {showResults: false};
    }

  return (
      <div>
        <div className="panel panel-default limitWidth homeBox projFix">
            { this.state.showResults ? <div className="putnamFooter">Putnam Related Skills</div> : null }
          <div className="mainSkills">
            <div className="skillBlock">
              <h2 className="skillTitle expert">Expert
              </h2>
            <hr className ="line exp" />
              <ul>
                <li className={classNames.putnam}>
                  CSS3 / SASS
                </li>
                <li className={classNames.putnam}>
                  JavaScript
                </li>
                <li className={classNames.putnam}>
                  JQuery
                </li>

                <li className={classNames.putnam}>
                  HTML5
                </li>
                  <li className={classNames.putnam}>
                    Python
                  </li>
                <li className={classNames.school}>
                  C/C++
                </li>
              </ul>
            </div>
            <div className="skillBlock">
              <h2 className="skillTitle proficient">Proficient</h2>
            <hr className ="line prof"/>
              <ul>

                <li className={classNames.self}>
                  ReactJS
                </li>
                  <li className={classNames.putnam}>
                    Django
                  </li>
                <li className={classNames.self}>
                  Jade / Pug
                </li>
                <li className={classNames.self}>
                  MongoDB
                </li>
              </ul>
            </div>
            <div className="skillBlock">
              <h2 className="skillTitle competent">Competent</h2>
                <hr className ="line comp"/>
              <ul>
                  <li className={classNames.self}>
                    NodeJS
                  </li>
                <li className={classNames.putnam}>
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
}



export default Skills;
