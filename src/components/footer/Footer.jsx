import React from 'react'
import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";

import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-top'>
      <a href="#home" className='footer-heading'>VS.</a>

      {/* <ul className="footer__links">
          <li href='#home'>Home</li>
          <li href='#'>Skills</li>
          <li href='#'>Skills</li>
          <li href='#'>Work</li>
          <li href='#'>Contact</li>
        </ul> */}
      <ul className='footer__navbar-links'>
        {['home', 'skills', 'work', 'certifications', 'about', 'contact'].map((item, index) => (
          <li className='footer__navbar-link-item' key={index}>
            <a className='footer__navbar-link-a' href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="footer__social-sites">
        <a href='https://www.linkedin.com/in/vivek-srivastava-a6ba63203/' target='_blank' rel="noreferrer"><FaLinkedin className='social-icon' /></a>
        <a href='https://github.com/Viveksri645' target='_blank' rel="noreferrer"><FaGithub className='social-icon'/></a>
        <a href='https://leetcode.com/vivek645' target='_blank' rel="noreferrer"><SiLeetcode className='social-icon' /></a>
        <a href='mailto:vivek99shri@gmail.com' target='_blank' rel="noreferrer"><SiGmail className='social-icon' /></a>
      </div>
      </div>
      <div className='footer-copyright'>
        <small>Copyright</small>
        <FaCopyright/>
        <small> Vivek Srivastava</small>
      </div>
    </div>
  )
}

export default Footer