import React, {useState}  from 'react'
import first from './image-finder-images/first.png' 
import second from './image-finder-images/second.png'
import third from './image-finder-images/third.png'
import fourth from './image-finder-images/fourth.png'
import fifth from './image-finder-images/fifth.png'
import sixth from './image-finder-images/sixth.png'

import carousel2_first from './carousel2_images/carousel2_first.png'
import carousel2_second from './carousel2_images/carousel2_second.png'
import carousel2_third from  './carousel2_images/carousel2_third.png'
import carousel2_fourth from './carousel2_images/carousel2_fourth.png'
import carousel2_fifth from './carousel2_images/carousel2_fifth.png'

import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

import './Portfolio.css'

function Portfolio() {
  const arr = [first,second,third,fourth,fifth,sixth]
  const arr2 = [carousel2_first,carousel2_second,carousel2_third,carousel2_fourth,carousel2_fifth]

  const [slide, setSlide] = useState(0);
  const [slide2,setSlide2] = useState(0);

  const prev_slide = () => {
    setSlide(slide===0?arr.length-1:slide-1);
  }

  const next_slide = () => {
    setSlide(slide===arr.length-1?0:slide+1);
  }

  const prev_slide2 = () => {
    setSlide2(slide2===0?arr2.length-1:slide2-1);
  }

  const next_slide2 = () => {
    setSlide2(slide2===arr2.length-1?0:slide2+1);
  }

  // setTimeout(() => {
  //   next_slide();
  // }, 5000);
  // console.log("hii")
  // console.log(data)
  return (
    <div className='portfolio-container'>
      <div className='portfolio-content'>
        <h1>Portfolio</h1>
        <p>My Portfolio Projects</p>

        <div className='portfolio-projects'>
          <BsArrowLeftCircleFill onClick={prev_slide} className='arrow arrow-left'/>
          {arr.map((item,idx)=>{
            return <img src={item} className={slide === idx? "slide":"slide slide-hidden"}  alt="not_found" key={idx}/>
          })}
          <BsArrowRightCircleFill onClick={next_slide} className='arrow arrow-right'/>
          <span className='indicators'>
            {arr.map((_,idx)=>{
              return (
                <button key={idx} onClick={()=>setSlide(idx)} className={slide === idx? "indicator":"indicator indicator-hidden"}></button>
              )
            })}
          </span>
        </div>
        <div className='portfolio-projects'>
          <BsArrowLeftCircleFill onClick={prev_slide2} className='arrow arrow-left'/>
          {arr2.map((item,idx)=>{
            return <img src={item} className={slide2 === idx? "slide":"slide slide-hidden"}  alt="not_found" key={idx}/>
          })}
          <BsArrowRightCircleFill onClick={next_slide2} className='arrow arrow-right'/>
          <span className='indicators'>
            {arr2.map((_,idx)=>{
              return (
                <button key={idx} onClick={()=>setSlide2(idx)} className={slide2 === idx? "indicator":"indicator indicator-hidden"}></button>
              )
            })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Portfolio