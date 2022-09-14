import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Carousel-Card.css'
const DivSlider = ({Div}) => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 2000,
   
  };
  return (
    <>
      <div className="Divslider">
        <Slider {...settings}>
          {Div.map((item) => (
            <div className='Divsliderchild'>
               <h1>{item.title}</h1>
               <p>{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
          </>
  )
}

export default DivSlider