import { motion } from 'framer-motion';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Next = ({ selectedProjectIndex, goToNextProject, projects, find }) => {
  const isDisabled = selectedProjectIndex === projects.length - 1;

  return (
    <motion.button
      onClick={goToNextProject}
      whileHover={!isDisabled ? { scale: 1.1, transition: { duration: 0.3 } } : {}}
      whileTap={!isDisabled ? { rotate: "3deg" } : {}}
      className="arrow-button next-button"
      style={{
        background: 'transparent',
        border: 'none',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        padding: 0
      }}
      disabled={isDisabled}
      aria-label="לעבור לפרויקט הבא"
    >
      <IoIosArrowForward
        className='arrows'
        style={{ fill: find ? '#000' : '#fff', opacity: isDisabled ? 0.3 : 1 }}
      />
    </motion.button>
  );
};

export default Next;
