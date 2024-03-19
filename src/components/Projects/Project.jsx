import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Project = ({ title, img, index, _id, item }) => {
  const nav = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const base_img = img.split("").slice(0, 33).join("");
  const src_img = img.split("").slice(33, img.length).join("");

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className={item}
      onClick={() => {
        nav(`/project/${_id}`);
      }}
    >
      <div className="image-container">
        {!imageLoaded && (
          <div
            className="blur-placeholder"
            style={{
              backgroundImage: `url('${img}?tr=w-300,bl-3,q-50')`,
            }}
          />
        )}
        <motion.img
          src={`${base_img}tr:w-800/${src_img}`}
          srcSet={`${base_img}tr:w-400/${src_img} 400w ${base_img}tr:w-800/${src_img} 800w ${base_img}tr:w-1200/${src_img} 1200w`}
          alt={title}
          loading="lazy"
          className={`image-project ${imageLoaded ? "loaded" : ""}`}
          onLoad={handleImageLoad}
        />
        <div className="color-overlay"></div>
        <div className="project-title">{title}</div>
      </div>
    </motion.div>
  );
};

export default Project;





/* initial={{ filter: "blur(15px)",  }}
          whileInView={{
            transition: { duration: 0.6 },
            filter: "blur(0)",
           

          }}
          viewport={{margin: '-20% 0px -20% 0px'}} */