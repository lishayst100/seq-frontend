import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import Loading from "../loading/Loading";
import { motion, useAnimationControls } from "framer-motion";
import Vimeo from "@u-wave/react-vimeo";
 const ProjectViewer = () => {
  const { id } = useParams(); // Get the project ID from URL params
  const { projects, isLoading } = useContext(ProjectContext);
  const controls = useAnimationControls();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const navigate = useNavigate(); // Hook to get the navigation function
  console.log(projects);
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
    <div>
      <div className="d-flex gap-4 align-items-center justify-content-between ">

      
        <motion.button
          onClick={goToPreviousProject}
          disabled={selectedProjectIndex === 0}
          whileHover={{scale: 1.1,transition: { duration: 0.3, delay: 0.}}}  
          whileTap={{rotate:'-3deg'}}
        >
          Previous Project
        </motion.button>
        
     
      <motion.div
        initial="initial"
        variants={variats}
        animate={controls}
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <h2>Project Details</h2>
        <h3>{selectedProject.title}</h3>
        <Vimeo video={selectedProject.linkId}/>
        <pre>{selectedProject.credits}</pre>
        {/* Display other project details as needed */}

        <div>
          {selectedProject.images?.map((image) => (
            <img src={image} alt={selectedProject.title} width={200} />
          ))}
        </div>
        
      </motion.div>
      <motion.button
          whileHover={{scale: 1.1,transition: { duration: 0.3, delay: 0.}}}  
          whileTap={{rotate:'3deg'}}
          onClick={goToNextProject}
          disabled={selectedProjectIndex === projects.length - 1}
        >
          Next Project
        </motion.button>
        </div>
      <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
    </div>
  );
};

export default ProjectViewer;
