import React from 'react';
import Contact from './Contact';

const NotFound = () => {
  return (
  <div>
    <div className="panel panel-default limitWidth homeBox projFix">
      <div className="panel-body flex-Outer">
        <div className="notFound"><span className="notFoundLettering">404</span> <br /> Not Found</div>
      </div>
    </div>
    <Contact value="acushing@cs.uml.edu" />
  </div>
  );
}

export default NotFound;
