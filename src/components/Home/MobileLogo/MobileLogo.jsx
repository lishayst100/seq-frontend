import React, { useEffect, useRef } from 'react'
import logo from '../../../images/logo2.png'
import { motion, useScroll, useTransform } from 'framer-motion'

const MobileLogo = () => {
  const ref = useRef(null)
  const { scrollYProgress} = useScroll({target:ref, offset: ['start start', 'end start']})
  const y = useTransform(scrollYProgress, [0,1], ['0%', '400%'])

  return (
    <motion.div style={{ height: '85vh',position:'relative'}} ref={ref} className='d-flex justify-content-center align-items-center'>
        <motion.img src={logo} alt="mobile-logo" style={{ width: '70%', objectFit: 'cover', y}} />
    </motion.div>
  )
}

export default MobileLogo