import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import Loading from "../loading/Loading";
import { useAnimationControls } from "framer-motion";
import "./ProjectDetails.scss";
import Details from "./Details";
import transition from "../../transition";
import SimilarProjects from "./SimilarProjects";
import MediaGrid from "./MediaGrid";

const ProjectViewer = () => {
  const { id } = useParams();
  // נניח ש-ProjectContext מחזיר את projects ו-isLoading כפי שצריך
  const { projects, isLoading } = useContext(ProjectContext); 
  const controls = useAnimationControls();
  // מציבים -1 כאינדקס התחלתי כדי לסמן "לא נמצא" עד שהחיפוש מתבצע
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1); 
  const navigate = useNavigate();

  useEffect(() => {
    // 1. אם עדיין בטעינה, או שאין פרויקטים, אל תנסה לחפש.
    if (isLoading || projects.length === 0) {
      // אם הטעינה הסתיימה ואין פרויקטים, setSelectedProjectIndex יישאר -1
      return; 
    }

    // 2. אם הטעינה הסתיימה ויש פרויקטים, חפש את הפרויקט הנוכחי.
    const foundIndex = projects.findIndex((project) => project._id === id);

    if (foundIndex !== -1) {
      setSelectedProjectIndex(foundIndex);
    } else {
      // אם לא נמצא, ודא שהאינדקס הוא -1 כדי להפעיל את הודעת השגיאה
      setSelectedProjectIndex(-1);
    }

    console.log(`Found index: ${foundIndex}, Project:`, projects[foundIndex]);
    
  }, [id, projects, isLoading]); // תלויות ב-id, projects וב-isLoading

  const goToPreviousProject = () => {
    controls.start("nextProject");
    if (selectedProjectIndex > 0) {
      const newIndex = selectedProjectIndex - 1;
      // נשתמש ב-navigate כדי לעדכן את ה-URL ואת ה-id ב-useParams, 
      // מה שיפעיל מחדש את ה-useEffect עם הפרויקט החדש.
      navigate(`/project/${projects[newIndex]._id}`); 
    }
  };

  const goToNextProject = () => {
    controls.start("nextProject");
    if (selectedProjectIndex < projects.length - 1) {
      const newIndex = selectedProjectIndex + 1;
      navigate(`/project/${projects[newIndex]._id}`);
    }
  };

  // ----------------------------------------------------
  // לוגיקת הצגה (Rendering Logic)
  // ----------------------------------------------------

  // 1. הצג טעינה אם עדיין מחכים לנתונים
  if (isLoading) {
    return <Loading />;
  }

  // 2. הצג שגיאה רק אחרי שהטעינה הסתיימה (isLoading הוא false)
  if (projects.length === 0 || selectedProjectIndex === -1) {
    // הבעיה: projects.length === 0 => אין פרויקטים במערכת
    // הבעיה: selectedProjectIndex === -1 => הפרויקט הספציפי (id) לא נמצא
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <p>Could not find the project with ID: **{id}**. Please check the URL.</p>
        {projects.length === 0 && (
            <p>Note: No projects were loaded from the server. Please check the backend connection.</p>
        )}
      </div>
    );
  }

  const selectedProject = projects[selectedProjectIndex];
  
  // פילטור פרויקטים דומים (Similar Projects)
  const projectGenre = projects
    .filter((project) => project.genres[0] === selectedProject.genres[0])
    .filter((project) => project._id !== selectedProject._id); // השתמש ב-_id לוודא שזה לא אותו אובייקט

  function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const find = selectedProject.genres.some(genre => genre === 'events');

  // שינוי ה-variants בהתאם לצורך
  const variants = {
    initial: { opacity: 0 },
    nextProject: {
      opacity: [0, 0.5, 1],
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <span style={{ background: find ? '#ffffff' : '#000' }} className="d-flex flex-column">

      <Details
        controls={controls}
        selectedProject={selectedProject}
        goToNextProject={goToNextProject}
        goToPreviousProject={goToPreviousProject}
        projects={projects}
        selectedProjectIndex={selectedProjectIndex}
      />

      <MediaGrid controls={controls} selectedProject={selectedProject} variants={variants} />

      <SimilarProjects
        shuffleArray={shuffleArray}
        projectGenre={projectGenre}
        find={find}
      />

    </span>
  );
};

export default transition(ProjectViewer);