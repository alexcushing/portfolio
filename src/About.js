import React from 'react';

import contextTypes from 'app/lib/contextTypes';

import Link from 'app/components/Link';
import Nav from 'app/components/navBar';

class About extends React.Component {
  static contextTypes = contextTypes

  constructor(props, context) {
    super(props, context);
}
  render() {
    return (
    <div>
      <Nav name="About" />
      <div className="panel panel-default limitWidth homeBox">
      </div>
    </div>);
  }
}

export default About;
