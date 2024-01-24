import React, { useState } from 'react'
import Links from './Links'
import logo from '../../images/logo2.png'
import { useMotionValueEvent, useScroll,motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const OtherNavbar = () => {
    const [hidden,setHidden] = useState(false)
    const {scrollY} = useScroll()
    useMotionValueEvent(scrollY,'change',(latest) => {
        const previous = scrollY.getPrevious()
        if( previous < latest){
            setHidden(true)
        }else{
            setHidden(false)
        }
    })

    const variants = {
        hidden: {
            y: '-110%',
            transition: {duration: 0.8 , ease: 'easeInOut'}
        },
        visible: {
            y: '0',
            transition: {duration: 0.8 , ease: 'easeInOut'}
        }
    }

  return (
    
    <motion.div className='otherNavbar' 
    variants={variants} 
    initial='visible'
    animate={hidden ? 'hidden' : 'visible'}
    style={{position: 'fixed'}}
    >
        <NavLink to={'/'}>
            <img src={logo} alt="" style={{width:90}} />
        </NavLink>
        <Links/>
        
    </motion.div>
    
  )
}

export default OtherNavbar