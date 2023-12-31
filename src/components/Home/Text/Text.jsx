import React from 'react'
import './Text.scss'
import { motion } from 'framer-motion'

const Text = () => {
  return (
    <motion.div className='text-header d-flex justify-content-center align-items-center'
    style={{zIndex:55}} 
    initial={{ opacity: 0 ,y: -200}}
    whileInView={{opacity: 1, y: 0,}}
    transition={{ duration: 1, ease: 'easeInOut',delay:0.5}}>
        <motion.p 
        className='w-50' >
        Sequence Studio is a creative boutique studio providing creative solutions and productions services including design ,animation & visual effects for varius media forms -  television, internet and film. 
        We specialize in the development and production of commercials, animations films, promotional and product videos
        ,from concept stage to final. <motion.span whileHover={{scale:1.1}} className='hi'> Say hi...</motion.span>
        </motion.p>
    </motion.div>
  )
}

export default Text

