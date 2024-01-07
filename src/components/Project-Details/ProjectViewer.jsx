import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import Loading from "../loading/Loading";
import { motion, useAnimationControls } from "framer-motion";
import Vimeo from "@u-wave/react-vimeo";
import "./ProjectDetails.scss";
import ImagesGrid from "./ImagesGrid";
import Next from "./Next";
import Previous from "./Previous";
import Back from "./Back";
import Details from "./Details";

const ProjectViewer = () => {
  const { id } = useParams(); // Get the project ID from URL params
  const { projects, isLoading } = useContext(ProjectContext);
  const controls = useAnimationControls();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const navigate = useNavigate(); // Hook to get the navigation function
 
  useEffect(() => {
    // Find the index of the selected project based on the ID from the URL params
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
  const variats = {
    initial: { opacity: 1 },
    nextProject: {
      opacity: [0, 0.5, 1],
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <div className="">
      <div className="d-flex justify-content-around align-items-center details-container">
        <Previous
          goToPreviousProject={goToPreviousProject}
          selectedProjectIndex={selectedProjectIndex}
        />

        <Details
          controls={controls}
          selectedProject={selectedProject}
          variats={variats}
        />

        <Next
          goToNextProject={goToNextProject}
          projects={projects}
          selectedProjectIndex={selectedProjectIndex}
        />
      </div>

      <ImagesGrid controls={controls}
          selectedProject={selectedProject}
          variats={variats} />
      <Back />
    </div>
  );
};

export default ProjectViewer;
