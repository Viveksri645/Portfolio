import React, { useState } from 'react'

// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import work1 from '../../assets/portfolio-1.png'
import work2 from '../../assets/portfolio-2.png'
import work3 from '../../assets/portfolio-3.png'
import work4 from '../../assets/portfolio-4.png'

import './Portfolio.css'

function Portfolio() {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(true);

  function handleClick1() {
    setToggle1(!toggle1);
  }
  function handleClick2() {
    setToggle2(!toggle2);
  }
  function handleClick3() {
    setToggle3(!toggle3);
  }
  function handleClick4() {
    setToggle4(!toggle4);
  }


  return (
    <div className='portfolio-container' id='work'>
      <div className="portfolio-heading">
        <h5>Get To Know About</h5>
        <h2>MY WORKS</h2>
        <h5>Here are some of my works</h5>
      </div>

      <div className="portfolio-content">
        <div className="portfolio-cart">
          {toggle1 ?
            <img src={work1} alt="work" />
            :
            <div className='portfolio-cart-text'>
              <div>
                <h5>Title:</h5>
                <small>Portfolio</small>
              </div>
              <div>
                <h5>Tech-Stack:</h5>
                <small>React JS, CSS, Media Queries</small>
              </div>
              <div>
                <h5>Description:</h5>
                <small>This best describes me, my works, my education. It's build upon React JS making
                  use of react hooks, ES6 and JSX syntax, function, animations and responsive queries.
                </small>
              </div>
            </div>
          }
          <div className='portfolio-cart-btn-group'>
            <button className='portfolio-cart-btn btn' onClick={handleClick1}>About</button>
            <a href='https://github.com/Viveksri645/Portfolio' target="_blank">Code</a>
            <button className='portfolio-cart-btn btn' onClick={() => alert("You are viewing my portfolio")}>Live</button>
          </div>
        </div>

        <div className="portfolio-cart">
          {toggle2 ?
            <img src={work2} alt="work" />
            :
            <div className='portfolio-cart-text'>
              <div>
                <h5>Title:</h5>
                <small>Shopur</small>
              </div>
              <div>
                <h5>Tech-Stack:</h5>
                <small>React JS, CSS, Media Queries</small>
              </div>
              <div>
                <h5>Description:</h5>
                <small>This describes a state management system which is accomplished using useContext hook. The product details are listed by fetching data from a JSON file.
                  It's build upon React JS making effective use of react hooks, ES6 and JSX syntax, function, JSON, animations and responsive queries.
                </small>
              </div>
            </div>
          }
          <div className='portfolio-cart-btn-group'>
            <button className='portfolio-cart-btn btn' onClick={handleClick2}>About</button>
            <a href='https://github.com/Viveksri645/shopur' target="_blank">Code</a>
            <a href='https://viveksri645.github.io/shopur/' target="_blank">Live</a>
          </div>
        </div>

        <div className="portfolio-cart">
          {toggle3 ?
            <img src={work3} alt="work" />
            :
            <div className='portfolio-cart-text'>
              <div>
                <h5>Title:</h5>
                <small>Image-Finder</small>
              </div>
              <div>
                <h5>Tech-Stack:</h5>
                <small>HTML, CSS, JavaScript, Media Queries</small>
              </div>
              <div>
                <h5>Description:</h5>
                <small>This describes an image-finder app, which makes use of api to fetch result based on user query. 
                  It's build making use of concepts of HTML (for structure), CSS (for creating appealing UI), JavaScript (for creating functions) 
                  and API (for fetching data) and Asynchronous JavaScript concepts.
                </small>
              </div>
            </div>
          }
          <div className='portfolio-cart-btn-group'>
            <button className='portfolio-cart-btn btn' onClick={handleClick3}>About</button>
            <a href='https://github.com/Viveksri645/Image-finder' target="_blank">Code</a>
            <a href='https://viveksri645.github.io/Image-finder/' target="_blank">Live</a>
          </div>
        </div>

        <div className="portfolio-cart">
          {toggle4 ?
            <img src={work4} alt="work" />
            :
            <div className='portfolio-cart-text'>
              <div>
                <h5>Title:</h5>
                <small>Watchinger</small>
              </div>
              <div>
                <h5>Tech-Stack:</h5>
                <small>HTML, CSS, media queries</small>
              </div>
              <div>
                <h5>Description:</h5>
                <small>This describes a watch store which makes use of HTML (for structure), CSS (for creating UI) and 
                  media queries (for making it responsive). It's build making use of properties of CSS like flex, grid, transitions, animations.
                </small>
              </div>
            </div>
          }
          <div className='portfolio-cart-btn-group'>
            <button className='portfolio-cart-btn btn' onClick={handleClick4}>About</button>
            <a href='https://github.com/Viveksri645/Watchinger' target="_blank">Code</a>
            <a href='https://viveksri645.github.io/Watchinger/' target="_blank">Live</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio