import React from 'react'
import './Intro.css'
import Typewriter from "typewriter-effect"
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
import instagram from '../../images/instagram.png'
import facebook from '../../images/facebook.png'
import vivek1 from '../../images/vivek1.jpg'
import Resume from '../services/Vivek_Srivastava_Resume.pdf'

const intro = () => {

  return (
    <div className="intro" >
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I Am</span>
          <span>Vivek Srivastava</span>
          <span>And I am a </span>
          <span>
            <Typewriter
              options={{
                strings: ['Enthusiastic Developer', 'Front End Developer', 'Front End Developer', 'Machine Learning Enthusiast'],
                autoStart: true,
                loop: true,
              }}
            />

          </span>
        </div>
        <div className="group_btn">
          <button className='button i-button'>Hire Me</button>
          <a href= {Resume} download>
            <button className='button i-button'>Get Resume</button>
          </a>

        </div>

        <div className="i-images">
          <a href="https://github.com/Viveksri645">
            <img src={github} alt="linkedin" />
          </a>
          <a href="https://www.linkedin.com/in/vivek-srivastava-a6ba63203/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/vivekshri99/">
            <img src={instagram} alt="linkedin" />
          </a>
          <a href="https://m.facebook.com/100045073854002/">
            <img src={facebook} alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="innerdiv1">
          <img src={vivek1} alt="vivek.jpg" />
        </div>
        <div className="blur" style={{background: '#C1F5FF',
                top: '17rem',
                width: '21rem'}}></div>
      </div>
    </div>
  )
}

export default intro