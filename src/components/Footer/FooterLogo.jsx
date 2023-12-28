import React, { useEffect } from 'react'
import logo from '../../images/logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
const FooterLogo = () => {


  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      delay:500
     
    })
  })

  return (
    <div className='d-flex justify-content-center align-items-center footer-logo' >
        <img src={logo} alt='...' className='image-footer' data-aos="fade-down"/>
    </div>
    
  )
}

export default FooterLogo