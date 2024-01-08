import React, { useState } from 'react'
import Links from './Links'
import logo from '../../images/logo2.png'
import { useMotionValueEvent, useScroll,motion } from 'framer-motion'

const OtherNavbar = () => {
    const [hidden,setHidden] = useState(false)
    const {scrollY} = useScroll()
    useMotionValueEvent(scrollY,'change',(latest) => {
        const previous = scrollY.getPrevious()
        if( previous < latest && latest > 150){
            setHidden(true)
        }else{
            setHidden(false)
        }
    })

    const variants = {
        hidden: {
            y: '-100vh',
            transition: {duration: 0.35 , ease: 'easeInOut'}
        },
        visible: {
            y: '0',
            transition: {duration: 0.35 , ease: 'easeInOut'}
        }
    }

  return (
    <motion.div className='otherNavbar' 
    variants={variants} 
    initial='visible'
    animate={hidden ? 'hidden' : 'visible'}
    style={{position: 'fixed'}}
    >
        <div>
            <img src={logo} alt="" style={{width:100}} />
        </div>
        <Links/>
        
    </motion.div>
  )
}

export default OtherNavbar