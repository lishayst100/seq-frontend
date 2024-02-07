import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Next from "./Next";
import ReactPlayer from "react-player";
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
  return (
  
    <motion.div
      exit={{opacity: 0, transition: {duration: 1.5} }}
      variants={variants}
      animate={controls}
      /* initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.5}}} */
      className="d-flex justify-content-center align-items-center gap-4 flex-column  flex-grow-1 container details-container"
    >
      <motion.h3 className="title-details" >{selectedProject.title}</motion.h3>
      <div className="w-100 d-flex justify-content-center align-items-center gap-1 gap-lg-4">
        <Previous
          goToPreviousProject={goToPreviousProject}
          selectedProjectIndex={selectedProjectIndex}
        />
        <motion.div className="ratio ratio-16x9"
        initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.5}}}
        >
          <ReactPlayer
            url={selectedProject.link}
            controls={true}
            width="100%"
            height="100%"
            light={true}
            playing={true}
          />
        </motion.div>
        <Next
          goToNextProject={goToNextProject}
          projects={projects}
          selectedProjectIndex={selectedProjectIndex}
        />
      </div>

      <pre className="credits-details">{selectedProject.credits}</pre>
    </motion.div>
 
  );
};

export default Details;
