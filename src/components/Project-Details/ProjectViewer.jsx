import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import Loading from "../loading/Loading";
import {  useAnimationControls } from "framer-motion";
import "./ProjectDetails.scss";
import Details from "./Details";
import transition from "../../transition";
import SimilarProjects from "./SimilarProjects";
import MediaGrid from "./MediaGrid";

const ProjectViewer = () => {
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
      /* setTimeout(()=>{setSelectedProjectIndex(newIndex);},500) */
      navigate(`/project/${projects[newIndex]._id}`);
    }
  };

  const goToNextProject = () => {
    controls.start("nextProject");
    if (selectedProjectIndex < projects.length - 1) {
      const newIndex = selectedProjectIndex + 1;
      
     /*  setTimeout(()=>{setSelectedProjectIndex(newIndex);},500) */
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
  const projectGenre = projects
    .filter((project) => project.genres[0] === selectedProject.genres[0])
    .filter((project) => project !== selectedProject);

  function shuffleArray(array) {
    // Create a copy of the original array
    const shuffledArray = array.slice();

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }

  const find = selectedProject.genres.some(genre => genre === 'events')

  const variants = {
    initial: { opacity: 0 },
    nextProject: {
      opacity: [0, 0.5, 1],
      transition: { duration: 1, delay: 0.5 },
    },
  };
  
  return (
    <span style={{background: find ? '#ffffff' : '#000'}} className="d-flex flex-column">

      <Details
        controls={controls}
        selectedProject={selectedProject}

        goToNextProject={goToNextProject}
        goToPreviousProject={goToPreviousProject}
        projects={projects}
        selectedProjectIndex={selectedProjectIndex}
      />
     

    
      <MediaGrid controls={controls} selectedProject={selectedProject} /* variants={variants} *//>

      <SimilarProjects
        shuffleArray={shuffleArray}
        projectGenre={projectGenre}
        find={find}
      />

    </span>
  );
};

export default transition(ProjectViewer);
