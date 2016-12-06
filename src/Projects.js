import React from 'react';

import Nav from './navBar';
import Contact from './Contact';

const Projects = () => {
  return (
  <div>
    <Nav name="Projects" />
    <div className="panel panel-default limitWidth homeBox">
      <div className="panel-body flex-Outer">
        <div className="flex-item fione"><a target="_blank" href="http://prsmphoto.com" className="seamlessLinkPrism"><h3 className="projectsTitle TitleOne">Prism</h3></a><hr className ="line prof" />
        <p>
            "Prism" is a photography based web application with an emphasis on a minimalistic aesthetic, tag based search functionality, and a portfolio style user profile. The goal is to provide photographers with a professional and interactive environment to share their work and connect with others.
        </p>
        <div className="projectFooter">Technologies<br /> MongoDB, Express.js, JQuery, Node.js, Vanilla JS, CSS</div>
        </div>
        <div className="flex-item fitwo"><h3 className="projectsTitle TitleTwo">Admin Portal</h3><hr className ="line expRed" />
        <p>
          While working as a co-op at <a target="_blank" href="https://www.putnam.com/" className="seamlessLink">Putnam Investments</a> I worked on a
          single page application for administration users to access multiple tables. The page displayed necessary information cleanly, and allowed administrative users could edit, add, or delete information seamlessly.
        </p>
        <div className="projectFooter">Technologies<br /> JavaScript, Django, Python, CSS</div>
        </div>
        <div className="flex-item fithree"><h3 className="projectsTitle TitleThree">Employee SMS Scheduling Bot</h3><hr className ="line exp" />
        <p>
            This python bot, that runs on an autosys schedule every 2 minutes, uses a GoogleVoice phone number to receive employee texts. It reviews these texts in which employees text out sick or late to work and the bot notifies their managers. Employees can also request their weekly schedule.
        </p>
        <div className="projectFooter">Technologies<br /> Python, SQL</div>
        </div>
       <Contact />
      </div>
    </div>
  </div>);
}


export default Projects;
