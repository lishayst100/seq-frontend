import React from "react";

import { useNavigate } from "react-router-dom";

const SimilarProject = ({ title, img, index, _id, item }) => {
  const nav = useNavigate();
  const base_img = img.split("").slice(0, 33).join("");
  const src_img = img.split("").slice(33, img.length).join("");

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
          initial={{ filter: "blur(15px)",  }}
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
