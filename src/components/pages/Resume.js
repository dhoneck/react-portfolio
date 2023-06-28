import React from 'react';
import ResumeFile from '../../dh-resume.pdf';

export default function Resume() {
  return (
    <div className="p-3">
      <h1>Resume</h1>
      {/* <button className='button my-4' onClick={ResumeFile}>View Resume</button> */}
      <a href={ ResumeFile } download="dh-resume.pdf" className='button mb-5'>Download Resume</a>
      <div className='columns'>
        <div className='column is-half'>
          <h2 class>Technical Skills</h2>
          <ul className='tech-skills'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Material UI</li>
            <li>Handlebars.js</li>
            <li>SQL</li>
            <li>NoSQL</li>
            <li>Postgres</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Python</li>
            <li>Django</li>
            <li>Scrapy</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>PythonAnywhere</li>
            <li>REST APIs</li>
            <li>Progressive Web Applications</li>
            <li>Windows OS</li>
            <li>Mac OS</li>
            <li>Command Line</li>            
          </ul>
        </div>
        <div className='column is-half'>
          <h2>Soft Skills</h2>
          <ul className='soft-skills'>
            <li>Communication</li>
            <li>Organization</li>
            <li>Problem Solving</li>
            <li>Resourcefulness</li>
            <li>Time Management</li>
            <li>Adaptability</li>
            <li>Teamwork</li>
            <li>Work Ethic</li>
            <li>Patience</li>
            <li>Open-Mindedness</li>
            <li>Creative</li>
            <li>Positive Attitude</li>
            <li>Flexibility</li>
            <li>Friendliness</li>
            <li>Passion</li>
            <li>Respectfulness</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
