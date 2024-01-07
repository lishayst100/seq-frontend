import React from "react";
import { motion } from "framer-motion";
const ImagesGrid = ({ selectedProject, variats,controls}) => {
  return (
    <motion.div 
    variants={variats}
    animate={controls}
    style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', maxWidth: '100%', overflow: 'hidden',padding:40 }}>
    {selectedProject.images.slice(0, 4).map((photo, index) => (
      <img
     
        key={index}
        src={photo}
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