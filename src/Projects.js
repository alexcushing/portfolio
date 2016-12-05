import React from 'react';

import Nav from './navBar';
import Contact from './Contact';

const Projects = () => {
  return (
  <div>
    <Nav name="Projects" />
    <div className="panel panel-default limitWidth homeBox">
      <div className="panel-body flex-Outer">
        <div className="flex-item fione"><h3>Prism</h3><hr className ="line prof" />
        <p>
            "Prism" is a photography based web application with an emphasis on a minimalistic aesthetic, tag based search functionality, and a portfolio style user profile. The goal is to provide photographers with a professional and interactive environment to share their work and connect with others.
        </p>
        </div>
        <div className="flex-item fitwo"><h3>Admin Portal</h3><hr className ="line expRed" />
        <p>
            "Filler" is a photography based web application with an emphasis on a minimalistic aesthetic, tag based search functionality, and a portfolio style user profile. The goal is to provide photographers with a professional and interactive environment to share their work and connect with others.
        </p>
        </div>
        <div className="flex-item fithree"><h3>fill in</h3><hr className ="line exp" />
        <p>
            "Prism" is a photography based web application with an emphasis on a minimalistic aesthetic, tag based search functionality, and a portfolio style user profile. The goal is to provide photographers with a professional and interactive environment to share their work and connect with others.
        </p>
        </div>  
       <Contact />
      </div>
    </div>
  </div>);
}
      

export default Projects;
