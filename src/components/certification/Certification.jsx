import React from 'react'
import certificate1 from '../../assets/certificate-1.png'
import certificate2 from '../../assets/certificate-2.png'
import certificate3 from '../../assets/certificate-3.png'

import './certification.css'

function Certification() {
  return (
    <div className='certification-container' id='certifications'>
      <div className="certification-heading">
        <h5>Get To Know About</h5>
        <h2>MY CERTIFICATIONS</h2>
        <h5>Here are some of my certifications</h5>
      </div>

      <div className='certification-main'>
        <div className="certification-cart">
          <div className='certification-img'>
            <a href={certificate1} target="_blank"><img src={certificate1} alt="certificate-1" /></a>
          </div>
          <div className="certification-text">
            <small>
              Learnt the concepts of Data Structures and Algorithms and got hands on experience in concepts
              such as array, linkedlist, tree, graphs using C++ as the programming language.
            </small>
          </div>
        </div>

        {/* <div className="certification-cart">
          <div className='certification-img'>
            <a href={certificate2} target="_blank"><img src={certificate2} alt="certificate-2" /></a>
          </div>
          <div className="certification-text">
            <small>
              Learnt the concepts of HTML, CSS, media queries and got hands on experience through
              project development.
            </small>
          </div>
        </div> */}

        <div className="certification-cart">
          <div className='certification-img'>
            <a href={certificate3} target="_blank"><img src={certificate3} alt="certificate-3" /></a>
          </div>
          <div className="certification-text">
            <small>
              Learnt the concepts of Python programming language. Gained hands on experience.
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certification;