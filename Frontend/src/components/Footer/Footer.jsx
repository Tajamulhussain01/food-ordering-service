import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum consequuntur dignissimos error esse. Earum delectus tenetur esse labore suscipit quisquam explicabo, obcaecati, at quis aut itaque nam! Cumque, ipsa?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+92-300-000-0000</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reerved</div>
    </div>
  )
}

export default Footer
