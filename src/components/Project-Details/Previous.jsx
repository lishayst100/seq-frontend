import { motion } from 'framer-motion';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";

const Previous = ({ goToPreviousProject, selectedProjectIndex, find }) => {
  const isDisabled = selectedProjectIndex === 0;

  return (
    <motion.button
      onClick={goToPreviousProject}
      whileHover={!isDisabled ? { scale: 1.1, transition: { duration: 0.3 } } : {}}
      whileTap={!isDisabled ? { rotate: "-3deg" } : {}}
      className="arrow-button prev-button"
      style={{
        background: 'transparent',
        border: 'none',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        padding: 0
      }}
      disabled={isDisabled}
      aria-label="לעבור לפרויקט הקודם"
    >
      <IoIosArrowBack
        className='arrows'
        style={{ fill: find ? '#000' : '#fff', opacity: isDisabled ? 0.3 : 1 }}
      />
    </motion.button>
  );
};

export default Previous;
