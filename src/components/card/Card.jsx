import React from 'react'
import './Card.css'
const Card = ({heading,detail}) => {
  return (
    <div className='card'>
        <h1>{heading}</h1>
        <p>{detail}</p>
        <button className="c-button">Learn more</button>
    </div>
  )
}

export default Card