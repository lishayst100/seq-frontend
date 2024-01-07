import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const Previous = ({selectedProjectIndex,goToNextProject,projects}) => {
  return (
    <motion.div
    whileHover={{ scale: 1.1, transition: { duration: 0.3, delay: 0 } }}
    whileTap={{ rotate: "3deg" }}
    onClick={goToNextProject}
    disabled={selectedProjectIndex === projects.length - 1}
  >
    <IoIosArrowForward className='arrows' />
  </motion.div>
  )
}

export default Previous