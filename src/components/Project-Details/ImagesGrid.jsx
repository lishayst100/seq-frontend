import React from "react";
import { motion } from "framer-motion";
const ImagesGrid = ({ selectedProject, variants,controls}) => {
  return (
    <motion.div 
    variants={variants}
    animate={controls}
    className="images-grid container"
    >
    {selectedProject.images.map((img, index) => (
      <img
        key={img}
        src={img}
        alt={`hoto ${index + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: '100%', maxHeight: '100%' }}
        className="rounded"
      />
    ))}
  </motion.div>
  );
};

export default ImagesGrid;

///