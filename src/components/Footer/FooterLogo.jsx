import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lottie from 'lottie-react'
import animationData from '../../lottie/footer.json' // Replace with your Lottie animation data
const FooterLogo = () => {
const [show, setShow] = useState(false)

  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      delay:500
     
    }
    
    )
    console.log(show)
    setShow(true)
    console.log(show)
  },[show])

  return (
    <div className='d-flex justify-content-center align-items-center footer-logo' >
      <Lottie animationData={animationData}  data-aos="fade-down" loop={false} onComplete={()=>{setShow(false)}}/>
        {/* <img src={logo} alt='...' className='image-footer'/> */}
    </div>
    
  )
}

export default FooterLogo