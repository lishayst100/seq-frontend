import React, { useContext, useEffect, useState } from "react";
import "./Projects.scss";
import { AnimatePresence, motion } from "framer-motion";
import TitleProjects from "./TitleProjects";
import { ProjectContext } from "../../context/ProjectContext";
import Loading from "../loading/Loading";
import SimilarProject from "../Project-Details/SimilarProject";

const Projects = () => {
    // הנחה: getProjects כבר מופעל אוטומטית ב-ProjectContext
    const { projects, isLoading } = useContext(ProjectContext); 
    
    // אין צורך לקרוא ל-getProjects כאן, זה כבר נעשה ב-Context
    /* useEffect(()=>{
        getProjects() 
    },[]) */

    const data = projects;
    const [selectedGenre, setSelectedGenre] = useState('');

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
                                    tabIndex={0}
                                    aria-label={`Project: ${project.title}`}
                                    
                                    // קריטי: שליחת המימדים לתקן CLS
                                    originalWidth={project.frontImage.originalWidth} 
                                    originalHeight={project.frontImage.originalHeight} 
                                />
                            ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </section>
    );
};

export default Projects;