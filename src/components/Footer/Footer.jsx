import React from 'react'
import './Footer.css'
import Footer_Logo from '../Asserts/logo_big.png'
import instagram from '../Asserts/instagram_icon.png'
import pintrest from '../Asserts/pintester_icon.png'
import whatsapp_icon from '../Asserts/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={Footer_Logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintrest} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
