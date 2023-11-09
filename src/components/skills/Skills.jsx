import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='skills-container'>
      <div className='skills-main'>
        <h1>Skills</h1>
        <p>My technical level</p>

        <div className='front-skills'>
          <h2>Frontend Skills</h2>
          <div className='skills'>
            <div className='skills-set-one'>
              <span className='c-skills'><i class='bx bxs-badge-check'></i><h3>HTML</h3><p>Intermediate</p></span>
              <span className='c-skills'><i class='bx bxs-badge-check'></i><h3>CSS</h3><p>Intermediate</p></span>
              <span className='c-skills'><i class='bx bxs-badge-check'></i><h3>Javascript</h3><p>Intermediate</p></span>
            </div>
            <div className='skills-set-two'>
              <span className='c-skills'><i class='bx bxs-badge-check'></i><h3>React JS</h3><p>Beginner</p></span>
              <span className='c-skills'><i class='bx bxs-badge-check'></i><h3>Git</h3><p>Beginner</p></span>
              {/* <span className='c-skills'><i class='bx bxs-badge-check'></i><h3>HTML</h3></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills