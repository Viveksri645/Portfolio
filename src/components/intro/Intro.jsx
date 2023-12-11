import React from 'react'
import './Intro.css'
import Me from '../../assets/avatar-1.svg'
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa"
import resume from "../../assets/vivek_srivastava_resume.pdf"

function Intro() {
    return (
        <div className='app__flex app__header' id='home'>
            <div className="app__header-info">
                <img src={Me} alt="me" className='intro-img' />
                <h1 className='intro__name'>Vivek Srivastava</h1>
                <span className='intro__education'>I'm a Front-End developer</span>
            </div>
            <div className='intro-social-sites'>
                <a href='https://www.linkedin.com/in/vivek-srivastava-a6ba63203/' target='_blank'><FaLinkedin className='intro-icons' /></a>
                <a href='https://github.com/Viveksri645' target='_blank'><FaGithub className='intro-icons' /></a>
                <a href='https://leetcode.com/vivek645' target='_blank'><SiLeetcode className='intro-icons' /></a>
                <a href='mailto:vivek99shri@gmail.com' target='_blank'><SiGmail className='intro-icons' /></a>
            </div>
            <a href={resume} download="vivek_srivastava_resume"><button type='download' src={resume} className='app__header-btn app__btn'>Resume</button></a>
        </div>
    )
}

export default Intro;