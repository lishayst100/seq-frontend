import React, { useState } from 'react'
import Video from '../../components/Home/Video/Video'
import './Home.scss'
import Text from '../../components/Home/Text/Text'
import Projects from '../../components/Projects/Projects'
import {motion,useScroll,useMotionValueEvent} from 'framer-motion'
import Navbar from '../../components/Navbar/ZZZ'
const Home = () => {
  const [isAnimated , setIsAnimated] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
      if(scrollY.get() > 50){
        setIsAnimated(true)
      }else{
        setIsAnimated(false)
      }
  })


  return (
    <div> 
      <Navbar/>
    <motion.div className='home' 
    variants={{
      hidden: {paddingTop:200 ,  transition: { duration: 1, ease: "easeInOut" }},
      visible:{paddingTop:600 , transition: { duration: 1, ease: "easeInOut" }},
    }}
    animate={isAnimated? "hidden" : "visible"}
    initial='visible'
    style={{paddingTop: isAnimated ? 50 : 500}}>
        <Video/>
        <Text/>
        <Projects/>
    </motion.div>
    </div>
    
  )
}

export default Home