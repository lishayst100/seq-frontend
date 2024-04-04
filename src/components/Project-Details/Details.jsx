import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Next from "./Next";
import Previous from "./Previous";
import Loading from "../loading/Loading";

const Details = ({
  variants,
  controls,
  selectedProject,
  goToPreviousProject,
  selectedProjectIndex,
  goToNextProject,
  projects,
}) => {
    const find = selectedProject.genres.some(genre => genre === 'events')
    

  return (
  
    <motion.div
      exit={{opacity: 0, transition: {duration: 1.5} }}
      variants={variants}
      animate={controls}
      /* initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.5}}} */
      className="d-flex justify-content-center align-items-center gap-4 flex-column  flex-grow-1 container details-container"
    >
      <motion.h3 className="title-details" style={{color: find ? '#000' : '#ffffff'}} >{selectedProject.title}</motion.h3>
     
      <div className="w-100 d-flex justify-content-center align-items-center gap-1 gap-lg-4">
        <Previous
          goToPreviousProject={goToPreviousProject}
          selectedProjectIndex={selectedProjectIndex}
          find ={find}
        />
        <motion.div className="ratio ratio-16x9"
        initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.5}}}
        >
          
          <video src={selectedProject.link} controls autoPlay={false} controlsList="nodownload"></video>
         
        </motion.div>
        <Next
          find ={find}
          goToNextProject={goToNextProject}
          projects={projects}
          selectedProjectIndex={selectedProjectIndex}
        />
        
      </div>

      <pre className="credits-details" style={{color: find ? '#000' : '#ffffff'}}>{selectedProject.credits}</pre>
    </motion.div>
 
  );
};

export default Details;
