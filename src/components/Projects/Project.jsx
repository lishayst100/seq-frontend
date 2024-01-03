import React from "react";
import { motion,AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Project = ({ title, img, index, _id }) => {
  const nav = useNavigate();

  return (
    <AnimatePresence>   
      <motion.div
      className="item"
      initial={{ scale: 0 }}
      whileInView={{
        transition: { duration: 0.7, delay: index * 0.05 },
        scale: 1,
      }}
      exit={{ scale: 0 ,transition: { duration: 0.5}}}
      onClick={() => {
        nav(`/project/${_id}`);
      }}
    >
      <div className="image-container">
        <img src={img} alt={title} className="image-project" />
        <div className="color-overlay"></div>
        <div className="project-title">{title}</div>
      </div>
    </motion.div>
    </AnimatePresence> 
  );
};

export default Project;
