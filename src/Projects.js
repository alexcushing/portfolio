import React, {Component} from 'react';
import Contact from './Contact';
import Project from './projects/project';

class Projects extends Component {
  constructor(props){
        super(props);
        this.state = {showResults: false};
        this.checkPutnam = this.checkPutnam.bind(this);
    }

    componentWillReceiveProps(){
        this.checkPutnam()
    }
    componentWillMount(){
        this.checkPutnam()
    }

    checkPutnam(){
        if(location.pathname === "/projects/putnamProjects"){
            this.setState({showResults: true});
        }else{
            this.setState({showResults: false});
        }
    }

  render() {
    return (
      <div>
        <div className="panel panel-default limitWidth homeBox">
            { this.state.showResults ? <div className="putnamFooter">Putnam Related Projects</div> : null }
            <div className="panel-body flex-Outer">
                { this.state.showResults ? null : <Project projectName="Prism" url={true} checkPutnam={this.checkPutnam}/> }
                <Project projectName="AdminPortal" url={false} checkPutnam={this.checkPutnam} />
                <Project projectName="SMS" url={false} checkPutnam={this.checkPutnam}/>
            </div>
        </div>
        <Contact value="contact@alexcushing.com" />
      </div>
    )
  }
}

export default Projects;

/*
{ this.state.showResults ? <Prism /> : null }
*/
