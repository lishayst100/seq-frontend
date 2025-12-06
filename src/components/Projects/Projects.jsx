import React, { useContext, useEffect, useState } from "react";
import "./Projects.scss";
import { AnimatePresence, motion } from "framer-motion";
import TitleProjects from "./TitleProjects";
import { ProjectContext } from "../../context/ProjectContext";
import Loading from "../loading/Loading";
import SimilarProject from "../Project-Details/SimilarProject";

const Projects = () => {
  const { getProjects, projects, isLoading } = useContext(ProjectContext);
  useEffect(()=>{
    getProjects()
  },[])
  const data = projects;

  const [selectedGenre, setSelectedGenre] = useState(''); // State to store selected genre

  const filteredData = selectedGenre
    ? data.filter(item => item.genres.includes(selectedGenre))
    : data;

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <section aria-labelledby="projects-heading">
      <TitleProjects handleGenreClick={handleGenreClick} />

      {isLoading ? (
        <Loading />
      ) : (
        <motion.div className="layout" layout role="list" aria-live="polite" aria-relevant="additions removals">
          <AnimatePresence>
            {filteredData
              .sort((a, b) => a.linkId - b.linkId)
              .map((project, index) => (
                <SimilarProject
                  key={project._id}
                  img={project.frontImage}
                  loading="lazy"
                  title={project.title}
                  index={index}
                  _id={project._id}
                  item="item"
                  role="listitem"
                  tabIndex={0} // מאפשר ניווט במקלדת
                  aria-label={`Project: ${project.title}`}
                />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
