import React from 'react'
import {Link}  from 'react-scroll'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar-container">
            <div className='navbar'>
                <h1>Vivek</h1>
                <div className='nav-links'>
                    <ul>
                    <Link spy={true} to='intro' smooth={true}>
                            <li className='nav-list'>Home</li>
                    </Link>
                    <Link spy={true} to='about' smooth={true}>
                            <li className='nav-list'>About</li>
                    </Link>
                    <Link spy={true} to='skills' smooth={true}>
                            <li className='nav-list'>Skills</li>
                    </Link>
                    <Link spy={true} to='education' smooth={true}>
                            <li className='nav-list'>Education</li>
                    </Link>
                    <Link spy={true} to='portfolio' smooth={true}>
                            <li className='nav-list'>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Contact' smooth={true}>
                            <li className='nav-list'>Contact</li>
                    </Link>
                        {/* <link to='About' spy={true} smooth={true}>About</link>
                        <link to='Skills' spy={true} smooth={true}>Skills</link>
                        <link to='Education' spy={true} smooth={true}>Education</link>
                        <link to='Portfolio' spy={true} smooth={true}>Portfolio</link>
                        <link to='Contact' spy={true} smooth={true}>Contact</link> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar