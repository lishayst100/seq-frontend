import React, { useRef } from "react";
import { motion,AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Project = ({ title, img, index, _id }) => {
  const nav = useNavigate();
  const ref = useRef(null);
  const isView = useInView(ref,{once:true})


  return (
   
      <motion.div
      ref={ref}
      className="item"
      initial={{/*  scale:  isView ? 1 : 0 , */filter: isView ? 'blur(0)':'blur(20px)' }}
      whileInView={{
        transition: { duration:0.7 },
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
