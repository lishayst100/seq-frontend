import React, { useEffect, useState } from 'react'
import Video from '../../components/Home/Video/Video'
import './Home.scss'
import Text from '../../components/Home/Text/Text'
import Projects from '../../components/Projects/Projects'
import {motion,useScroll,useMotionValueEvent, useTransform} from 'framer-motion'
/* import Navbar from '../../components/Navbar/ZZZ' */
import { useResize } from '../../hooks/useResize'
import transition from '../../transition'
import ResNavbar from '../../components/Navbar/ResNavbar'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import MobileLogo from '../../components/Home/MobileLogo/MobileLogo'
const Home = () => {
  const isMobile = useResize()
  const [isAnimated , setIsAnimated] = useState(false);
  const { scrollY ,scrollYProgress} = useScroll();

  const paddingProgress = useTransform(scrollYProgress ,[0,0.1], ['93vh' , '38vh'])


  useMotionValueEvent(scrollY, "change", (latest) => {
      if(scrollY.get() > 50){
        setIsAnimated(true)
      }else{
        setIsAnimated(false)
      }
  })


  


  return (
    <div> 
      {isMobile > 760 ? <Navbar/> : <ResNavbar/>}
    <motion.div className='home' 
    style={{paddingTop: isMobile > 760 ? paddingProgress : ''}}
    /* variants={{
      withPadding: {paddingTop: isMobile < 800 ? '50vh' : '80vh' ,  transition: { duration: transitionNavbar }},
      withoutPadding:{paddingTop:'19vh' , transition: { duration: transitionNavbar  }},
    }}
    animate={ isAnimated ? "withoutPadding" : "withPadding"}
    initial='withPadding' */
   >
      {isMobile > 760 ? '' :  <MobileLogo/>}
        <Video/>
        <Text/>
        <Projects/>
        
    </motion.div>
    <Footer scrollProgress={0.8}/>
    </div>
    
  )
}

export default transition(Home)