import React from 'react'
import './About.css'
import profile_photo from '../../photoes/profile_photo.png'
import vivek_resume from './vivek_srivastava_resume.pdf'

function About() {
    return (
        <div className='about-main'>
            <div className='about-container'>
                <h1>About Me</h1>
                <div className='about-content-container'>
                    <img src={profile_photo} alt='about' className='about-img'/>
                    <div className='about-content'>
                        <div className='about-txt'>
                            <div className='about-cart'>
                                <i class='bx bx-medal bx-md'></i>
                                <h2>Experience</h2>
                                <p>Fresher</p>
                            </div>
                            <div className='about-cart'>
                                <i class='bx bx-shopping-bag bx-md'></i>
                                <h2>Completed</h2>
                                <p>4+ Projects</p>
                            </div>
                        </div>
                        <p>I am a B.Tech IT fresher graduated in 2023 with a keen interest in emerging technologies.
                            I have developed several projects on web development, used api to fetch data and render it on screen.
                        </p>
                        <a href={vivek_resume} target='_blank' rel="noreferrer" type='vivek-srivastava-resume' className='about-btn btn'>Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About