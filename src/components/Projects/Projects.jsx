import React, { useContext } from "react";
import "./Projects.scss"; // Ensure the correct path to your SCSS file
import { motion } from "framer-motion";
import TitleProjects from "./TitleProjects";
import { ProjectContext } from "../../context/ProjectContext";
import Loading from "../loading/Loading";
import Project from "./Project";

const Projects = () => {
  const { projects, isLoading } = useContext(ProjectContext);
  return (
    <div>
      <TitleProjects />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="layout">
          {projects.map((project,index) => (
            <Project img={project.images[0]} title={project.title} key={project._id} index={index} _id={project._id}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
