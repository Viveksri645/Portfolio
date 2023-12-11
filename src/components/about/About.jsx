import React from 'react'
import './About.css'
import me2 from '../../assets/avatar-2.svg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'

function About() {
    return (
        <div className='about__container about' id="about">
            <h5>Get To Know</h5>
            <h2 className='about-heading'>ABOUT ME</h2>

            <div className="about-inner">
                <img src={me2} alt="me" className='about-img' />

                <div className="side-container">
                    <div className='about-card'>
                        <div>
                            <FaAward className='about-card-award about-icon' />
                            <h5>Experience</h5>
                        </div>
                        <p>
                            <span>
                            <small>Fresher with a good tech stack. Graduated with
                                B.Tech. degree with specialisation in Information Technology. Having hands on experience in HTML, CSS, JS, React JS.
                            </small>
                            </span>
                        </p>
                    </div>

                    <div className='about-card'>
                        <div>
                            <FiUsers className='about-card-user about-icon' />
                            <h5>Educational Knowledge</h5>
                        </div>
                        <p>
                            <span><b>B.Tech. IT</b></span><br />
                            <span>
                                <small>Bundelkhand Institute of Engineering and Technology.</small><br />
                                <small>2020-2023</small><br />
                                <small>CGPA-8.44</small>
                            </span>
                        </p>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default About