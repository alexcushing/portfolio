import React, {Component} from 'react';
import Contact from './Contact';
import Prism from './projects/Prism';
import AdminPortal from './projects/AdminPortal';
import SMS from './projects/SMS';


class Projects extends Component {
  constructor(props){
        super(props);
        this.state = {showResults: true};
    }


  render() {
    const { params } = this.props
    console.log(params)
    if (this.props.params.parent === "putnamProjects") {
      console.log("yes")
      this.state = {showResults: false};
    }
    else{
      this.state = {showResults: true};
      console.log("no");
    }

    return (
      <div>
        <div className="panel panel-default limitWidth homeBox">
          <div className="panel-body flex-Outer">
            { this.state.showResults ? <Prism /> : null }
            <AdminPortal />
            <SMS />
          </div>
        </div>
        <Contact value="acushing@cs.uml.edu" />
      </div>
    )
  }
}

export default Projects;
