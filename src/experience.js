import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
class Experience extends Component {
  constructor(props){
        super(props);
       
    }

  render() {
    return (
      <div className="panel panel-default limitWidth homeBox projFix">
        <div className="professionalExperience">
            <div className="putnamExp">
                <h2 className="expTitle">Putnam Investments</h2>
                <h6 className="expSubTitle">Web & Software Developer Co-op</h6>
                <hr className="prof" />
                <p className="expAbout">
                    Worked in web and software development creating interfaces for data manipulation, python cycles for automating work tasks, ETL jobs, and more.
                    <div className="subExpPutnam"><br/><br/><span className="accent"><Link className="accent" to="/projects">Larger Scale projects worked on:</Link></span>
                    <br/><br/>Admin Portal
                    <br/>Employee SMS Scheduling Bot
                    <hr />
                    <span className="accent"><Link className="accent" to="/skills">Languages used: </Link></span><br/><br/>
                    Python, SQL, Django, JavaScript</div>
                </p>
            </div>
        </div>
    </div>
    );
  }
}



export default Experience;


