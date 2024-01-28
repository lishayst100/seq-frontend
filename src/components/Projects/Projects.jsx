import React, { useContext, useState } from "react";
import "./Projects.scss"; // Ensure the correct path to your SCSS file
import { motion } from "framer-motion";
import TitleProjects from "./TitleProjects";
import { ProjectContext } from "../../context/ProjectContext";
import Loading from "../loading/Loading";
import Project from "./Project";

const Projects = () => {
  const {projects,isLoading} = useContext(ProjectContext)
  const data = projects;

  const [selectedGenre, setSelectedGenre] = useState(''); // State to store selected genre

  const filteredData = selectedGenre
    ? data.filter(item => item.genres.includes(selectedGenre))
    : data;

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };
 
  return (
    <div>
     <TitleProjects handleGenreClick={handleGenreClick}/>
      {isLoading ? (
        <Loading />
      ) : (
        <motion.div className="layout">
          {filteredData.map((project,index) => (
            <Project img={project.images[0]} title={project.title} key={project._id} index={index} _id={project._id} item={'item'}/>
          ))}
        </motion.div>
      )}
      
    </div>
  );
};

export default Projects;
