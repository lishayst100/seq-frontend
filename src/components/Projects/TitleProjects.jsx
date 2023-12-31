import React, { useContext, useState } from 'react'
import './Projects.scss'
import { ProjectContext } from '../../context/ProjectContext'
import { motion } from 'framer-motion' 
const TitleProjects = () => {
    
    const titles = [
      {value : ' ',title: 'All'},
      {value : 'animation' , title:'Animation'},
      {value : 'motion', title: 'Motion' },
      {value : 'commercials',title: 'Commercials'}
      
      
    ]
    const [selected,setSelected] = useState(0)
    const {projectsFilter} = useContext(ProjectContext)

    const toggleSelected = (i) => {
        if (selected === i) {
          return setSelected(null);
        }
  
        setSelected(i);
      };


      
  return (
    <div className='d-flex gap-4 justify-content-center align-items-center titles' >
        {titles.map((title, index) => (
          <motion.div
            className={ selected === index ? 'title-projects selected' : 'title-projects'} key={index} onClick={()=>{
            toggleSelected(index)
            projectsFilter(title.value)
            }}>
            {title.title}
          </motion.div>
        ))}
    </div>
  )
}

export default TitleProjects