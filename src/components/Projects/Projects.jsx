import React from 'react';
import './Projects.scss'; // Ensure the correct path to your SCSS file
import navbar from '../../lottie/navbarAnimation.json'
import footer from '../../lottie/fotr.json'
import Lottie from 'lottie-react';
import YourComponent from '../Lottie/FooterAnimation';

const Projects = ({ data }) => {
  const getGridArea = (index) => {
    const positionInSet = index % 7 === 0 ? 7 : index % 7;

    switch (positionInSet) {
      case 1:
        return 'div1';
      case 2:
        return 'div2';
      case 3:
        return 'div3';
      case 4:
        return 'div4';
      case 5:
        return 'div5';
      case 6:
        return 'div6';
      case 7:
        return 'div7';
      default:
        return ''; // Default class
    }
  };

  return (
    <div>
        <div className="parent">
      {data?.map((project, i) => (
        <div
          key={project._id}
          className={`photo ${getGridArea(i + 1)}`} // Adding 1 to index to start from 1
          style={{ backgroundImage: `url(${project.images[0]})` }}
        >
          <h2>{project.title}</h2>
        </div>
      ))}

    </div>
    <div>
       {/*  {data.map((project, i) => (
            <div key={project._id}>
                <h2>{project.title}</h2>
            </div>
        ))} */}
    </div>
            <Lottie animationData={navbar} loop={false}/>
            
           

    </div>
    

  );
};

export default Projects;
