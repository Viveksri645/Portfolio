import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import {Link}  from 'react-scroll'
import './Navbar.css'

function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <a href='#home' className='app__navbar-heading'>VS.</a>
            </div>

            <ul className='app__navbar-links'>
                {['home', 'skills', 'work', 'certifications', 'about', 'contact'].map((item, index) => (
                    <li className='app__navbar-link-item' key={index}>
                        <a className='app__navbar-link-a' href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle &&
                    <div className='app__navbar-toggle-menu'>
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'skills', 'work', 'certifications', 'about', 'contact'].map((item, index) => (
                                <li className='app__navbar-link-item' key={`link-${index}`}>
                                    <a className='app__navbar-link-a' href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar