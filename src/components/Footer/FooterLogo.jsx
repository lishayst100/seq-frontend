import React, {  useRef } from 'react'
import 'aos/dist/aos.css'
import Lottie from 'lottie-react'
import animationData from '../../lottie/footer.json' // Replace with your Lottie animation data
import { useMotionValueEvent,useScroll ,motion} from 'framer-motion'
import { useLocation } from 'react-router-dom'


const FooterLogo = () => {

const {pathname} = useLocation()
const ref = useRef(null);
const { scrollYProgress, scrollY } = useScroll({target:ref});


const isPathname = () => {
  if(pathname === '/') return 0.8
  return 0.5
}

const scrollTarget = isPathname()

 useMotionValueEvent(scrollY, "change", (latest) => {
    if(scrollYProgress.get() > scrollTarget){
   
      ref.current.setDirection(1)
      ref.current.play()
    }else{
     
      ref.current.setDirection(-1)
      ref.current.play()
    }
      
 })

  return (
    <motion.div className='d-flex justify-content-center align-items-center footer-logo'  >
      <Lottie animationData={animationData} lottieRef={ref} loop={false}/>
        
    </motion.div>
    
  )
}

export default FooterLogo