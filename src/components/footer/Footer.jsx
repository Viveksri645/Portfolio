import React from 'react'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import {Link} from 'react-scroll'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="f-content">

                <span>viveksrivastava1202@gmail.com</span>
                <div className="f-icons">
                    <Link spy={true} to="https://www.instagram.com/vivekshri99/" smooth={true}>
                        <Insta  color='blue' size='3rem'  />
                    </Link>
                    <a href="https://m.facebook.com/100045073854002/">
                        <Facebook color='blue' size='3rem' />
                    </a>
                    <a href="https://github.com/Viveksri645">
                        <Github color='blue' size='3rem' />
                    </a>
                </div>
                <span> @copyright All rights to this website are reserved</span>
            </div>
        </div>
    )
}

export default Footer