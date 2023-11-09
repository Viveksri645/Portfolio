import React from 'react'
import './Education.css'

function Education() {
  return (
    <div className='education-container'>
        <div className='education-main'>
            <h1>Education</h1>
            <p>My Education level</p>
            <div className='education-content'>
                <div className='levels'>
                    <h3>B.Tech IT</h3>
                    <p>Graduated from BIET Jhansi in 2023 with CGPA of 8.44</p>
                </div>
                <div className='levels'>
                    <h3>Intermediate</h3>
                    <p>Completed higher secondary education with a percentage of 82.4%</p>
                </div>
                <div className='levels'>
                    <h3>High School</h3>
                    <p>Completed high school with distinction and a percantge of 86.5%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education;