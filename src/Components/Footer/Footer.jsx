import React from 'react'
import  './footer.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className='logo flex'>
             <h1 className='flex'><SiYourtraveldottv className='icon'/>
             Travel Buddy
             </h1>
             
            </a>
          </div>

          <div className="socials flex">
          <ImFacebook className='icon'/>
          <BsTwitter className='icon'/>
          <AiFillInstagram className='icon'/>
          <AiFillLinkedin className='icon'/>
          </div>

        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Helpful Links
          </span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel Security</a>
          </li>
          <li>
            <a href="#">Vehicles</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Contact Us :  
          </span>
          <span className='phone'> +918929******    </span>
          <span className='email'>rrai5267@gmail.com</span>

        
        </div>

      </div>
    </div>
  )
}

export default Footer