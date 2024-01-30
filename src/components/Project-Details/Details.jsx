import { motion } from "framer-motion";
import React from "react";
import Next from "./Next";
import ReactPlayer from "react-player";
import Previous from "./Previous";
import Loading from "../loading/Loading";

const Details = ({ variants, controls, selectedProject,goToPreviousProject,selectedProjectIndex ,goToNextProject,projects}) => {
  return (
    <motion.div
      initial="initial"
      variants={variants}
      animate={controls}
      className="d-flex justify-content-center align-items-center gap-4 flex-column  flex-grow-1 container details-container"
    >
      <h3 className="title-details">{selectedProject.title}</h3>
  <div className="w-100 d-flex justify-content-center align-items-center gap-1 gap-lg-4">
      <Previous goToPreviousProject={goToPreviousProject} selectedProjectIndex={selectedProjectIndex}/>
        <div className="ratio ratio-16x9">
        <ReactPlayer
          url={selectedProject.link}
          controls={true}
          width="100%"
          height="100%"
          light={true}
          playing={true}
        />
      </div>
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
