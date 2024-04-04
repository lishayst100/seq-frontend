import React from "react";

import { useNavigate } from "react-router-dom";
import { convertBaseImg, convertSrcImg } from "../../utils/utils";

const SimilarProject = ({ title, img, index, _id, item }) => {
  const nav = useNavigate();
  const base_img = convertBaseImg(img)
  const src_img = convertSrcImg(img)

  return (
    <div
      
      
      className={item}
      onClick={() => {
        nav(`/project/${_id}`);
      }}
    >
      <div className="image-container">
        <img
             src={`${base_img}tr:w-800,f-auto/${src_img}`}
             srcSet={`${base_img}tr:w-400,f-auto/${src_img} 400w ,${base_img}tr:w-800,f-auto/${src_img} 800w, ${base_img}tr:w-1200,f-auto/${src_img} 1200w`}
          alt={title}
          className="image-project"
          onError={({ currentTarget }) => {
            currentTarget.src = `${base_img}tr:w-800,f-png/${src_img}`;
            currentTarget.onerror = null;
          }}
         
        />
        <div className="color-overlay"></div>
        <div className="project-title">{title}</div>
      </div>
    </div>
  );
};

export default SimilarProject;
