import React from 'react'
import './Text.scss'
import { motion } from 'framer-motion'

const Text = () => {
  const variants = {
    initial: {
      y: '-30vh',
      transition :{
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9]
      }
    },
    animate :{
      y: 0,
      transition :{
        duration:1,
        ease: [0.6, 0.01, -0.05, 0.9]
      }
    }
  }
  return (
    <motion.div className='text-header d-flex justify-content-center align-items-center'
    style={{zIndex:55}} 
    variants={variants}
    initial='initial'
    whileInView='animate'
    /* transition={{ duration: 1, ease: 'easeInOut',delay:0.5}} */>
        <motion.p 
        className='text-desc' >
        Sequence Studio is a creative boutique studio providing creative solutions and productions services including design ,animation & visual effects for varius media forms -  television, internet and film. 
        We specialize in the development and production of commercials, animations films, promotional and product videos,
        from concept stage to final. <motion.span whileHover={{scale:1.1}} className='hi'> Say hi...</motion.span>
        </motion.p>
    </motion.div>
  )
}

export default Text

