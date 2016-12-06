import React from 'react';

import Contact from './Contact';
import Nav from './navBar';

const Home = () => {
  return (
  <div>
    <Nav name="index" />
    <div className="panel panel-default limitWidth homeBox">
      <div className="panel-body flex-Outer">
        <div className="introduction">
        <img className="image" src="http://alexcushing.com/public/img/me.jpeg" alt="me"/>
        <div className="namePanel">
          <div className="indexCard">
            <h2 className="nameIntro">
              Alex Cushing
            </h2>
            <div>
              <blockquote>
                <p>Web & Software Developer</p>
                <footer>Student <cite title="school">UMass Lowell</cite></footer>
              </blockquote>
          </div>
          </div>
        </div>
        <div className="linksPanel">
          <a className="gitLink" href="https://github.com/alexcushing" target="_blank">
          <img src="http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg" alt="" className="icon"/> GitHub
        </a>
          <a className="linkedInLink" href="https://www.linkedin.com/in/alexandercushing" target="_blank">
          <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" alt="" className="icon"/> LinkedIn
        </a>
        </div>
      </div>
       <Contact />
      </div>
    </div>
  </div>
  );
}

export default Home;
