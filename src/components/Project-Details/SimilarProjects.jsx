// SimilarProjects.jsx
import React from 'react';
import SimilarProject from './SimilarProject';

const SimilarProjects = ({ shuffleArray, projectGenre, find }) => {
  return (
    <section
      className="similar-projects-container container mx-auto d-flex flex-column gap-5"
      aria-labelledby="similar-projects-heading"
    >
      <div>
        <h3 id="similar-projects-heading" style={{ color: find ? '#000' : '#fff' }}>
          Similar Projects
        </h3>
        <hr />
      </div>

      <div
        className="d-flex justify-content-center align-items-center gap-3 mx-auto pt-2 flex-column flex-lg-row flex-xl-row flex-md-row"
        role="list"
        aria-label="רשימת פרויקטים דומים"
      >
        {projectGenre.slice(0, 3).map((project) => (
          <SimilarProject
            key={project._id}
            img={project.frontImage}
            title={project.title}
            _id={project._id}
            item="item"
          />
        ))}
      </div>
    </section>
  );
};

export default SimilarProjects;
