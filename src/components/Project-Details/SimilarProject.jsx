// SimilarProject.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { convertBaseImg, convertSrcImg } from "../../utils/utils";

const SimilarProject = ({ title, img, _id, item }) => {
  const nav = useNavigate();
  const base_img = convertBaseImg(img);
  const src_img = convertSrcImg(img);

  return (
    <motion.article
      className={item}
      onClick={() => nav(`/project/${_id}`)}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') nav(`/project/${_id}`);
      }}
      aria-label={`מעבר לפרויקט דומה בשם: ${title}`}
    >
      <div className="image-container">
        <img
          src={`${base_img}tr:w-800,f-auto/${src_img}`}
          srcSet={`${base_img}tr:w-400,f-auto/${src_img} 400w, ${base_img}tr:w-800,f-auto/${src_img} 800w, ${base_img}tr:w-1200,f-auto/${src_img} 1200w`}
          alt={`תמונה של הפרויקט ${title}`}
          className="image-project"
          onError={({ currentTarget }) => {
            currentTarget.src = `${base_img}tr:w-800,f-png/${src_img}`;
            currentTarget.onerror = null;
           
          }}
          
        />
        <div className="color-overlay" aria-hidden="true" />
        <div className="project-title">{title}</div>
      </div>
    </motion.article>
  );
};

export default SimilarProject;
