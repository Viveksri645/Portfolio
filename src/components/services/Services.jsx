import React from 'react'
import './Services.css'
import Card from "../card/Card.jsx"
import Resume from './Vivek_Srivastava_Resume.pdf';

const services = () => {
    
  return (
    <div className="Services" id="Services">
        {/* left side */}
        <div className="awesome">
         <span>My Awesome</span>
         <span>services</span>
         
         <a href={Resume} download>

          <button className='button s-button'>Download CV</button>

         </a>
         <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>

        {/* right side */}
        <div className="cards">
            <div style={{left: '22rem'}}>
                <Card
                 
                 heading = {'Software Developer'}
                 detail = {"Data Structure, Algorithm, Competitive Coding"}
                />
            </div>

            {/*Second card  */}

            <div style={{top: '12rem', left:'2rem'}}>
                <Card
                
                 heading = {'Front End Developer'}
                 detail = {"HTML, CSS, React JS"}
                />
            </div>

            {/* third card */}

            <div style={{top: '19rem', left:'20rem'}}>
                <Card
                 heading = {'Data Scientist'}
                 detail = {"Machine Learning, SQL"}
                />
            </div>
        </div>
    </div>
  )
}

export default services