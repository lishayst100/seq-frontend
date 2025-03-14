import React from 'react'
import SimilarProject from './SimilarProject'

const SimilarProjects = ({shuffleArray,projectGenre,find}) => {
  return (
    <div className="similar-projects-container container mx-auto d-flex flex-column gap-5">
        <div>
        <h3 style={{color: find ? '#000' : '#fff'}}>Similar Projects</h3>
        <hr />
        </div>
        
        <div className=" d-flex justify-content-center align-items-center gap-3 mx-auto pt-2 flex-column flex-lg-row flex-xl-row flex-md-row">
          {projectGenre.slice(0,3).map((project) => (
            <SimilarProject
              key={project._id}
              img={project.frontImage}
              title={project.title}
              _id={project._id}
              item={'item'}
            />
          ))}
        </div>
      </div>
  )
}

export default SimilarProjects