import React from 'react'
import './Intro.css'
import profile_photo from '../../photoes/profile_photo.png'

function Intro() {
    return (
        <>
            <section id="intro">
                <div className='intro-main'>
                    <div className='intro-social-sites'>
                        <a href='https://www.linkedin.com/in/vivek-srivastava-a6ba63203/'><i class='bx bxl-linkedin bx-md'></i></a>
                        <a href='https://github.com/Viveksri645'><i class='bx bxl-github bx-md' ></i></a>
                        <a href='https://leetcode.com/vivek645/'><i class='bx bx-code bx-md'></i></a>
                    </div>
                    <div className='introContent'>
                        <span className='hello'>Hello,</span>
                        <span className='introText'>I'm<span className='introName'>Vivek Srivastava</span><br />software developer.</span>
                        <p className='introPara'>I am a skilled front end developer with experience of creating UI friendly websites.</p>
                        <button className='intro-btn btn'>Hire Me</button>
                    </div>
                    <img src={profile_photo} alt='profile' className='intro-img'></img>
                </div>
            </section>
        </>
    )
}

export default Intro;