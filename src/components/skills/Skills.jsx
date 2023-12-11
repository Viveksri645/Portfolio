import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import git from '../../assets/git.png'
import cpp from '../../assets/cpp.png'
import api from '../../assets/api.png'
import sql from '../../assets/sql.jpg'
import python from '../../assets/python.png'

import './Skills.css'


function Skills() {
  return (
    <div className='skills-container' id='skills'>
      <div className='skills-head'>
        <h5>Get To Know About My</h5>
        <h2 className='skills-heading'>SKILLS</h2>
      </div>

      <div className="myskills-section">
        <div className='frontend-skills'>
          <div className='front-1 front-other'>
            <img src={html} alt="html" />
            <small>HTML</small>
          </div>

          <div className='front-2 front-other'>
            <img src={css} alt="css"/>
            <small>CSS</small>
          </div>

          <div className='front-3 front-other'>
            <img src={js} alt="js"/>
            <small>JS</small>
          </div>

          <div className='front-4 front-other'>
            <img src={react} alt="react js"/>
            <small>React JS</small>
          </div>

          <div className='front-5 front-other'>
            <img src={api} alt="api"/>
            <small>API</small>
          </div>

          <div className='front-6 front-other'>
            <img src={git} alt="git"/>
            <small>Git</small>
          </div>

          <div className='front-7 front-other'>
            <img src={cpp} alt="cpp"/>
            <small>C++</small>
          </div>

          <div className='front-8 front-other'>
            <img src={python} alt="python"/>
            <small>Python</small>
          </div>

          <div className='front-9 front-other'>
            <img src={sql} alt="sql"/>
            <small>SQL</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills