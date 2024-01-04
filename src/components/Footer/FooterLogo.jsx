import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css'
import Lottie from 'lottie-react'
import animationData from '../../lottie/footer.json' // Replace with your Lottie animation data
import { useMotionValueEvent,useScroll } from 'framer-motion'


const FooterLogo = () => {
const [show, setShow] = useState(false)
const { scrollYProgress, scrollY } = useScroll();
const ref = useRef(null);

 useMotionValueEvent(scrollY, "change", (latest) => {
    if(scrollYProgress.get() > 0.9){
      setShow(true)
      ref.current.setDirection(1)
      ref.current.play()
    }else{
      setShow(false)
      ref.current.setDirection(-1)
      ref.current.play()
    }
      
 })

  return (
    <div className='d-flex justify-content-center align-items-center footer-logo' >
      <Lottie animationData={animationData} lottieRef={ref} loop={false}/>
        {/* <img src={logo} alt='...' className='image-footer'/> */}
    </div>
    
  )
}

export default FooterLogo