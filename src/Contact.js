import React, { Component } from 'react';
import copy from 'copy-to-clipboard';

class Contact extends Component {
  constructor(props){
        super(props);
        this.state = {showResults: false};
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }


    copyToClipboard(){
      console.log("in copy");
      const email = this.props.value;
      copy(email);
      this.setState({ showResults: true });
      setTimeout(function() {
        this.setState({ showResults: false });
      }.bind(this), 1000);


    }
  render() {
    return (
      <div className="contact-outer">
        { this.state.showResults ? <Results /> : null }
        <div className="emailPanel" data-balloon="contact@alexcushing.com" data-balloon-pos="right" onClick={this.copyToClipboard} ref="email">
          <span>@</span>
        </div>
    </div>
    );
  }
}

class Results extends Component {
  render() {
    return (
            <div>
              <div className="copied">copied!</div>
            </div>
          );
      }
}


export default Contact;


/*
function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }
*/
