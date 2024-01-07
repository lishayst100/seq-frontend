import React from "react";
import { motion} from "framer-motion";
import { useNavigate } from "react-router-dom";

const Project = ({ title, img, index, _id }) => {
  const nav = useNavigate();

  return (
    <motion.div
      className="item"
      onClick={() => {
        nav(`/project/${_id}`);
      }}
    >
      <div className="image-container">
        <motion.img
          src={img}
          alt={title}
          className="image-project"
          initial={{ filter: "blur(20px)" }}
          whileInView={{
            transition: { duration: 1, delay: 0.4 },
            filter: "blur(0)",
          }}
        />
        <div className="color-overlay"></div>
        <div className="project-title">{title}</div>
      </div>
    </motion.div>
  );
};

export default Project;
