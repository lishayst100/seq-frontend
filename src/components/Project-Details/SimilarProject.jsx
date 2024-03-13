import React from "react";

import { useNavigate } from "react-router-dom";

const SimilarProject = ({ title, img, index, _id, item }) => {
  const nav = useNavigate();

  return (
    <div
      
      
      className={item}
      onClick={() => {
        nav(`/project/${_id}`);
      }}
    >
      <div className="image-container">
        <img
          src={img}
          alt={title}
          className="image-project"
          initial={{ filter: "blur(15px)",  }}
          
         
        />
        <div className="color-overlay"></div>
        <div className="project-title">{title}</div>
      </div>
    </div>
  );
};

export default SimilarProject;
