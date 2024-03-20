import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ImagesGrid = ({ selectedProject, variants, controls }) => {
  const [imageLoaded, setImageLoaded] = useState({});
  const ref = useRef();

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <motion.div
      variants={variants}
      animate={controls}
      className="images-grid container"
    >
      {selectedProject.images.map((img, index) => {
        const base_img = img.split("").slice(0, 33).join("");
        const src_img = img.split("").slice(33, img.length).join("");
        return (
          <div key={img} className="image-wrapper">
            {!imageLoaded[index] && (
              <div
                className="blur-placeholder"
                style={{
                  background: `url('${img}?tr=w-300,bl-3,q-50') center center`,
                }}
              />
            )}
            <img
              src={img}
              alt={`img ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              onError={({ currentTarget }) => {
                currentTarget.src = `${base_img}tr:w-800,f-png/${src_img}`;
                currentTarget.onerror = null;
              }}
              className={`rounded ${imageLoaded[index] ? "loaded" : ""}`}
              ref={ref}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default ImagesGrid;
