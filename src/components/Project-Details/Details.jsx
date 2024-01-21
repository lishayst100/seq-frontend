import { motion } from "framer-motion";
import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import { useResize } from "../../hooks/useResize";
import ReactPlayer from "react-player";

const Details = ({ variants, controls, selectedProject }) => {
  const width = useResize();
  const containerWidth = width;
  const vimeoWidth = `${containerWidth * 0.6}px`;

  return (
    <motion.div
      initial="initial"
      variants={variants}
      animate={controls}
      className="d-flex justify-content-center align-items-center gap-4 flex-column  flex-grow-1"
    >
      <h3 className="title-details">{selectedProject.title}</h3>
      {/* <Vimeo video={selectedProject.linkId} width={vimeoWidth} controls={true} allowFullScreen/> */}
      <div className="ratio ratio-16x9 player-wrapper">
        <ReactPlayer
          url={selectedProject.link}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>

      <pre className="credits-details">{selectedProject.credits}</pre>
    </motion.div>
  );
};

export default Details;
