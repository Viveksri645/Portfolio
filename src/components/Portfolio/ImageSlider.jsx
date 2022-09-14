import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './ImageSlider.css'

const ImageSlider = ({image}) => {
  
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
      <div className="ImageSlider">
        <Slider {...settings}>
          {image.map((item) => (
            <div className='ImageSliderimg'>
               <img src={item.src} alt="img" />
            </div>
          ))}
        </Slider>
      </div>
          </>
  )
}

export default ImageSlider