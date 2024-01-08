import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import Loading from "../loading/Loading";
import { motion, useAnimationControls } from "framer-motion";
import "./ProjectDetails.scss";
import ImagesGrid from "./ImagesGrid";
import Next from "./Next";
import Previous from "./Previous";
import Back from "./Back";
import Details from "./Details";

const ProjectViewer = () => {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { id } = useParams(); 
  const { projects, isLoading } = useContext(ProjectContext);
  const controls = useAnimationControls();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const navigate = useNavigate(); 
  useEffect(() => {
    
    const foundIndex = projects.findIndex((project) => project._id === id);
    if (foundIndex !== -1) {
      setSelectedProjectIndex(foundIndex);
    }
  }, [id, projects]);

  const goToPreviousProject = () => {
    controls.start("nextProject");
    if (selectedProjectIndex > 0) {
      const newIndex = selectedProjectIndex - 1;
      setSelectedProjectIndex(newIndex);
      navigate(`/project/${projects[newIndex]._id}`);
    }
  };

  const goToNextProject = () => {
    controls.start("nextProject");
    if (selectedProjectIndex < projects.length - 1) {
      const newIndex = selectedProjectIndex + 1;
      setSelectedProjectIndex(newIndex);
      navigate(`/project/${projects[newIndex]._id}`);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (projects.length === 0 || selectedProjectIndex === -1) {
    return <div>Project not found</div>;
  }

  const selectedProject = projects[selectedProjectIndex];
  const projectGenre = 
  projects
  .filter(project => project.genres[0] === selectedProject.genres[0])
  .filter(project => project !== selectedProject)
  

  const variants = {
    initial: { opacity: 1 },
    nextProject: {
      opacity: [0, 0.5, 1],
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <>
      <div className="d-flex justify-content-around align-items-center details-container">
        <Previous
          goToPreviousProject={goToPreviousProject}
          selectedProjectIndex={selectedProjectIndex}
        />

        <Details
          controls={controls}
          selectedProject={selectedProject}
          variants={variants}
        />

        <Next
          goToNextProject={goToNextProject}
          projects={projects}
          selectedProjectIndex={selectedProjectIndex}
        />
      </div>

      <ImagesGrid controls={controls}
          selectedProject={selectedProject}
          variants={variants} />

      <Back />
      <h3>
        More From This Genre
      </h3>
      {projectGenre.map(project => (
        <div key={project._id}>{project.title}</div>
      ))}
    </>
  );
};

export default ProjectViewer;
