import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo2.png'
import ig_icon from '../Assets/instagram_icon.png'
import wp_icon from '../Assets/whatsapp_icon.png'
import in_icon from '../Assets/linkdin.png'
const Footer=()=>{
    const handleRedirect = (url) => {
        window.location.href = url;
    }

  return (
    <div className='Footer'> 
      <div className="footer-logo">
            <img src={footer_logo}alt="" />
            <p>GarmentGlory</p>
            </div>
            <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
        
        <div className="footer-social-icon">
            <div className="footer-icons-container" onClick={() => handleRedirect('https://www.instagram.com/soumyadip2131')}>
                <img src={ig_icon} alt="" />
            </div>
            <div className="footer-icons-container2" onClick={() => handleRedirect('https://www.linkedin.com/in/soumyadip-dhara/')}>
                <img src={in_icon} alt="" />
            </div>
            <div className="footer-icons-container"  onClick={() => handleRedirect('https://wa.me/8513927347')}>
                <img src={wp_icon} alt="" />
            </div>
            
        </div>
      
      <div className="footer-copyright">
                <hr />
                <p>Copyright @2024 - All Right Reserved</p>
            </div>
    </div>
  )
}

export default Footer

