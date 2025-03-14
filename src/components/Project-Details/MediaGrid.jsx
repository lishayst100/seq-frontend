import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { convertBaseImg, convertSrcImg } from "../../utils/utils";

const MediaGrid = ({ selectedProject/* , variants, controls */ }) => {
  const [imageLoaded, setImageLoaded] = useState({});
  const ref = useRef();
  
  

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <motion.div
      /* variants={variants}
      animate={controls} */
      className="media-grid container"
    >

{selectedProject.supplementaryVideos?.map((v, index) => (
        <div key={v} className="media-wrapper">
          <video
            src={v}
            controls={selectedProject.isLooping ? false : true}
            loop={selectedProject.isLooping ? true : false}
            muted={selectedProject.isLooping ? true : false}
            autoPlay={selectedProject.isLooping ? true : false}
            controlsList="nodownload"
            className="media-item rounded-3"
            poster={selectedProject.frontImages[index]}
            playsInline
          />
        </div>
      ))}
      {selectedProject.images.map((img, index) => {
        const base_img = convertBaseImg(img);
        const src_img = convertSrcImg(img);
        return (
          <div key={img} className="media-wrapper ">
            {!imageLoaded[index] && (
              <div
                className="blur-placeholder"
                style={{
                  background: `url('${img}?tr=w-300,bl-3,q-50,fm-auto') center center`,
                  height: 200,
                }}
              />
            )}
            <img
              src={`${base_img}tr:w-800,f-auto/${src_img}`}
              srcSet={`${base_img}tr:w-400,f-auto/${src_img} 400w ,${base_img}tr:w-800,f-auto/${src_img} 800w, ${base_img}tr:w-1200,f-auto/${src_img} 1200w`}
              alt={`img ${index + 1}`}
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

      
    </motion.div>
  );
};

export default MediaGrid;
