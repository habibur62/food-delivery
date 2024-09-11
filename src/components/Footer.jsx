import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <span>About Us</span>
                <span>Delivery</span>
                <span>Privacy policy</span>

                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                        <span>01773769080</span>
                        <span>cheffest@gmail.com</span>
            </div>
        </div>
        <hr />
        <p className='cp-right'>Copyright 2024 @ cheffest.com - All Right Reserved.</p>
    </div>
  )
}
