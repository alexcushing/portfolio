import React, {Component} from 'react';
import Contact from './Contact';
import Project from './projects/project';

class Projects extends Component {
  constructor(props){
        super(props);
        this.state = {showResults: true};
    }


  render() {
    const { params } = this.props
    if (this.props.params.parent === "putnamProjects") {
      this.setState({showResults: false});
    }
    else{
      this.setState({showResults: true});
    }

    return (
      <div>
        <div className="panel panel-default limitWidth homeBox">
            <Project />
        </div>
        <Contact value="acushing@cs.uml.edu" />
      </div>
    )
  }
}

export default Projects;

/*
{ this.state.showResults ? <Prism /> : null }
*/
