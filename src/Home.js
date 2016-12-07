import React from 'react';
import Contact from './Contact';

const Home = () => {
  return (
  <div>
    <div className="panel panel-default limitWidth homeBox projFix">
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
          <img src="http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg" alt="" className="icon"/> <span className="word"> GitHub</span>
        </a>
          <a className="linkedInLink" href="https://www.linkedin.com/in/alexandercushing" target="_blank">
          <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" alt="" className="icon"/> <span className="word"> LinkedIn</span>
        </a>
        </div>
      </div>
      </div>
    </div>
    <Contact value="acushing@cs.uml.edu" />
  </div>
  );
}

export default Home;
