import React from 'react'
import './Works.css'
import Div from '../carousel-card/Carouseldiv.jsx'
import DivSlider from '../carousel-card/Carousel.jsx' 
const Works = () => {
    
        return (
            <div className="works">

                {/* left side */}

                <div className="awesome left">
                    <span>My Awesome</span>
                    <span>work and technologies <br />
                        used in various Projects</span>
                    <span>
                        <br />

                    </span>
                    <div className="blur s-blur" style={{ background: 'rgb(238 210 255)' }}></div>
                    <button className='button s-button'>Hire me</button>
                    <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
                </div>

                {/* right side */}
                <div className='right'>
                   <div className="right_slide">

                       <DivSlider className="slide" Div={Div}/>
                   </div>
                </div>
            </div>
        )
    }

    export default Works