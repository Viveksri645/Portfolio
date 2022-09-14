import React from 'react'
import './Portfolio.css'
import ImageSlider from './ImageSlider.jsx'
import image from './Image.jsx'

const Portfolio = () => {
    return (
        <div className="portfolio" id="Portfolio">
            <div className="blur p-blur1" style={{ background: 'rgb(238 210 255)' }}></div>

            <div className="blur p-blur2" style={{ background: '#ABF1FF94' }}></div>
            <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}><span style={{ fontWeight: "bold", fontSize: "40px", color: "blue" }}>Port</span>folio</h1>

            <div className="container">
                <ImageSlider image={image} />
            </div>
            <div className='portfoliobtn'>

                <button className='button p-button' style={{ margin: "1rem 1rem 1rem 26rem" }}>Hire me</button>
            </div>
        </div>
    )
}

export default Portfolio