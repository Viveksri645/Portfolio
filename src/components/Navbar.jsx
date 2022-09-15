import React from 'react'
// import Toggle from './toggle/Toggle';
import {Link}  from 'react-scroll'
import './Navbar.css';
function Navbar() {
    return (
        <div className='n-wrapper' id="Navbar">
            <div className="n-left">
                <div className="n-name">
                    <span style={{ color: 'blue', fontSize: '2rem' }}>V</span>ivek
                </div>
                {/* <Toggle /> */}
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                            <li style={{color:"blue"}}>Home</li>
                        </Link>

                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>

                        <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>

                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>

                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                            
                <button className="button n-button">
                    Contact
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar