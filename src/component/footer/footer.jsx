import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mahek</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Home</a></li>
        {/* <li><a href="#services">Home</a></li> */}
        <li><a href="#portfolio">Home</a></li>
        <li><a href="#testimonials">Home</a></li>
        <li><a href="#contact">Home</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small className='footer__copyright_rights'>
          &copy; Mahek Ochani.All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default footer