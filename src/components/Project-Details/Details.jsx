import { AnimatePresence, motion } from "framer-motion";
import React from "react";
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
  const find = selectedProject.genres.some(genre => genre === 'events');

  return (
    <motion.div
      className="d-flex justify-content-center align-items-center gap-4 flex-column flex-grow-1 container details-container"
      role="region"
      aria-label={`פרויקט נבחר: ${selectedProject.title}`}
    >
      <motion.h3
        className="title-details"
        style={{ color: find ? "#000" : "#ffffff" }}
        aria-live="polite"
        tabIndex={0}
      >
        {selectedProject.title}
      </motion.h3>

      <div
        className="w-100 d-flex justify-content-center align-items-center gap-1 gap-lg-4"
        role="group"
        aria-label="ניווט בין פרויקטים"
      >
        <Previous
          goToPreviousProject={goToPreviousProject}
          selectedProjectIndex={selectedProjectIndex}
          find={find}
        />

        <motion.div
          className="ratio ratio-16x9"
          role="region"
          aria-label={`וידאו של ${selectedProject.title}`}
        >
          <video
            src={selectedProject.link}
            controls
            autoPlay={false}
            poster={selectedProject.frontImage}
            controlsList="nodownload"
            aria-label={`וידאו של ${selectedProject.title}`}
          />
        </motion.div>

        <Next
          find={find}
          goToNextProject={goToNextProject}
          projects={projects}
          selectedProjectIndex={selectedProjectIndex}
        />
      </div>

      <pre
        className="credits-details"
        style={{ color: find ? "#000" : "#ffffff" }}
        aria-label="קרדיטים"
        tabIndex={0}
      >
        {selectedProject.credits}
      </pre>
    </motion.div>
  );
};

export default Details;
