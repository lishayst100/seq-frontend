import React, { useContext } from 'react';
import './Projects.scss'; // Ensure the correct path to your SCSS file
import navbar from '../../lottie/navbarAnimation.json'

import Lottie from 'lottie-react';
import YourComponent from '../Lottie/FooterAnimation';
import TitleProjects from './TitleProjects';
import { ProjectContext } from '../../context/ProjectContext';

const Projects = () => {
 
  const {projects} = useContext(ProjectContext)
  return (
    <div>
       <TitleProjects/>
       <div className=' container mx-auto layout'>
       { projects.map((project, index) => (
        <div key={project._id} className='item bg-danger' style={{height:400}} >
          <img src={project.images[0]} alt="" className='image-project' style={{height:400, width:'100%'}} />
          
        </div>
       ))}
       </div>
       
            
           

    </div>
    

  );
};

export default Projects;
