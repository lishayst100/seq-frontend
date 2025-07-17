// MediaGrid.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { convertBaseImg, convertSrcImg } from "../../utils/utils";

const MediaGrid = ({ selectedProject }) => {
  const [imageLoaded, setImageLoaded] = useState({});
  const ref = useRef();

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <motion.section className="media-grid container" aria-label={`מדיה נלווית לפרויקט ${selectedProject.title}`}>
      {selectedProject.supplementaryVideos?.map((v, index) => (
        <div key={v} className="media-wrapper">
          <video
            src={v}
            controls={!selectedProject.isLooping}
            loop={!!selectedProject.isLooping}
            muted={!!selectedProject.isLooping}
            autoPlay={!!selectedProject.isLooping}
            controlsList="nodownload"
            className="media-item rounded-3"
            poster={selectedProject.frontImages?.[index]}
            playsInline
            aria-label={`סרטון ${index + 1} מתוך הפרויקט`}
          />
        </div>
      ))}
      {selectedProject.images.map((img, index) => {
        const base_img = convertBaseImg(img);
        const src_img = convertSrcImg(img);
        return (
          <div key={img} className="media-wrapper">
            {!imageLoaded[index] && (
              <div
                className="blur-placeholder"
                style={{
                  background: `url('${img}?tr=w-300,bl-3,q-50,fm-auto') center center`,
                  height: 200,
                }}
                aria-hidden="true"
              />
            )}
            <img
              src={`${base_img}tr:w-800,f-auto/${src_img}`}
              srcSet={`${base_img}tr:w-400,f-auto/${src_img} 400w, ${base_img}tr:w-800,f-auto/${src_img} 800w, ${base_img}tr:w-1200,f-auto/${src_img} 1200w`}
              alt={`תמונה ${index + 1} מתוך הפרויקט ${selectedProject.title}`}
              className={`media-item ${imageLoaded[index] ? "loaded rounded-3" : ""}`}
              ref={ref}
              onLoad={() => handleImageLoad(index)}
              onError={({ currentTarget }) => {
                currentTarget.src = `${base_img}tr:w-800,f-png/${src_img}`;
                currentTarget.onerror = null;
              }}
            />
          </div>
        );
      })}
    </motion.section>
  );
};

export default MediaGrid;
