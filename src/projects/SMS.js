import React from 'react';

const SMS = () => {
  return (
    <div className="flex-item fithree"><h3 className="projectsTitle TitleThree">Employee SMS Scheduling Bot</h3><hr className ="line exp" />
    <p>
        This python bot, that runs on an autosys schedule every 2 minutes, uses a GoogleVoice phone number to receive employee texts. It reviews these texts in which employees text out sick or late to work and the bot notifies their managers. Employees can also request their weekly schedule.
    </p>
    <div className="projectFooter">Technologies<br /> Python, SQL</div>
    </div>
    )

}


export default SMS;
