import React from 'react';
import Contact from './Contact';

const Home = () => {
  return (
  <div>
    <div className="panel panel-default limitWidth homeBox projFix">
      <div className="panel-body flex-Outer">
        <div className="introduction">
          <div className="imageAndTitle">
          <img className="image" src="https://avatars3.githubusercontent.com/u/14876141?v=3&u=cd28972994a3b223e59227558bf9537f96c6bd44&s=400" alt="me"/>
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
          </div>
        <div className="linksPanel">
          <a className="gitLink" href="https://github.com/alexcushing/portfolio" target="_blank">
          <img src="http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg" alt="" className="icon"/> <span className="word"> GitHub</span>
        </a>
          <a className="linkedInLink" href="https://www.linkedin.com/in/alexandercushing" target="_blank">
          <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" alt="" className="icon"/> <span className="word"> LinkedIn</span>
        </a>
        </div>
      </div>
      </div>
    </div>
    <Contact value="alexrcushing@gmail.com" />
  </div>
  );
}

export default Home;
