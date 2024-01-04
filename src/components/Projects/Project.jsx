import React, { useRef } from "react";
import { motion,AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Project = ({ title, img, index, _id }) => {
  const nav = useNavigate();



  return (
   
      <motion.div
      
      className="item"
      initial={{/*  scale:  isView ? 1 : 0 , */filter: 'blur(20px)' }}
      whileInView={{
        transition: { duration: 1 },
        filter: 'blur(0)'
      }}
     
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

  );
};

export default Project;
