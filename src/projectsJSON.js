
const Projs =
{
  projects: [{
    name: "Prism",
    putnam: "no",
    projURL: "http://prsmphoto.com",
    outerDivClassName: "flex-item fione",
    headerClassName: "projectsTitle TitleOne",
    projName: "Prism",
    lineColorClassName: "line prof",
    description: "\"Prism\" is a photography based web application with an emphasis on a minimalistic aesthetic, tag based search functionality, and a portfolio style user profile. The goal is to provide photographers with a professional and interactive environment to share their work and connect with others.",
    Technologies: "MongoDB, Express.js, JQuery, Node.js, Vanilla JS, SCSS"
  }, {
    name: "Admin Portal",
    putnam: "yes",
    projURL: "",
    outerDivClassName: "flex-item fitwo",
    headerClassName: "projectsTitle TitleTwo",
    projName: "Admin Portal",
    lineColorClassName: "line expRed",
    description: "While working as a co-op at Putnam Investments, I worked on a single page application for administration users to access multiple tables. The page displayed necessary information cleanly, and allowed administrative users to edit, add, or delete information seamlessly.",
    Technologies: " JavaScript, Django, Python, CSS"
  }, {
    name: "SMS",
    putnam: "yes",
    projURL: "",
    outerDivClassName: "flex-item fithree",
    headerClassName: "projectsTitle TitleThree",
    projName: "Employee SMS Scheduling Bot",
    lineColorClassName: "line exp",
    description: "This python bot, that runs on an autosys schedule every 2 minutes, uses a GoogleVoice phone number to receive employee texts. It reviews these texts in which employees text out sick or late to work and the bot notifies their managers. Employees can also request their weekly schedule.",
    Technologies: " Python, SQL"
  }]
}

    export default Projs;
