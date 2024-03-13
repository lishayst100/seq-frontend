import { motion } from 'framer-motion'
import React from 'react'
import {  IoIosArrowBack } from "react-icons/io";

const Previous = ({goToPreviousProject,selectedProjectIndex,find}) => {
  return (
    <motion.div
          onClick={goToPreviousProject}
          disabled={selectedProjectIndex === 0}
          whileHover={{ scale: 1.1, transition: { duration: 0.3, delay: 0 } }}
          whileTap={{ rotate: "-3deg" }}
        >
          <IoIosArrowBack className='arrows' style={{fill: find ? '#000' : '#fff'}} />
        </motion.div>
  )
}

export default Previous