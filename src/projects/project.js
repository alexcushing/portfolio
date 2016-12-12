import React, {Component} from 'react';
import Projs from '../projectsJSON';

class Project extends Component {
  constructor(props){
        super(props);
    }

    render(){
      const name = this.props.projectName
      for(var i = 0; i < Projs.projects.length; i++){
        var currentProj = Projs.projects[i].projectName;
        var current = Projs.projects[i];
          if(currentProj === name){
              return(
              <div className={current.outerDivClassName}>
              { this.props.url ? <a target="_blank" href={current.projURL} className="seamlessLinkPrism"><h3 className={current.headerClassName}>{current.projName}</h3></a> : <h3 className={current.headerClassName}>{current.projName}</h3> }
              <hr className ={current.lineColorClassName} />
                <p>
                  {current.description}
                </p>
              <div className="projectFooter">Technologies<br />{current.Technologies}</div>
            </div>
              )
          }
      }
      return(<div></div>)
    }
}




export default Project;
