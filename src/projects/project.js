import React, {Component} from 'react';
import Projs from '../projectsJSON';

class Project extends Component {
  constructor(props){
        super(props);
        this.state = {urlCheck: false};
    }


    render(){
      var x =[]
      for(var i = 0; i < Projs.projects.length; i++){
        var current = Projs.projects[i];
        if(current.projURL.length != 0){
          this.state = {urlCheck: true};
        }
        else{
          this.state = {urlCheck: false};
        }


          if(location.pathname === "/projects/putnamProjects" && current.putnam === "no"){
            x[i] = (<div className="putnamFooter">Putnam Related Projects</div>)
          }
          else{
            x[i] = (<div className={current.outerDivClassName}>
              { this.state.urlCheck ? <a target="_blank" href={current.projURL} className="seamlessLinkPrism"><h3 className={current.headerClassName}>{current.projName}</h3></a> : <h3 className={current.headerClassName}>{current.projName}</h3> }
              <hr className ={current.lineColorClassName} />
                <p>
                  {current.description}
                </p>
              <div className="projectFooter">Technologies<br />{current.Technologies}</div>
            </div>)
          }

      }
      return(<div className="panel-body flex-Outer">{x}</div>)
    }
}




export default Project;
