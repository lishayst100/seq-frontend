import React, { useContext, useEffect, useState } from 'react'
import './Projects.scss'
import { ProjectContext } from '../../context/ProjectContext'
import { motion } from 'framer-motion' 
const TitleProjects = ({handleGenreClick}) => {
    
    const titles = [
      {value : '',title: 'All'},
      {value : 'commercial' , title:'Commercials'},
      {value : 'motion', title: 'Motion' },
      {value : 'ux',title: 'UX'},
      {value : 'events', title: 'Events' },
      
      
      
    ]
    const [selected,setSelected] = useState(0)
    const {projectsFilter} = useContext(ProjectContext)



    useEffect(()=>{
      setSelected(0)
    },[])
    const toggleSelected = (i) => {
        if (selected === i) {
          return setSelected(null);
        }
  
        setSelected(i);
      };
      


      
  return (
    <div className='d-flex gap-xl-4 gap-3 justify-content-center align-items-center titles flex-wrap' >
        {titles.map((title, index) => (
          <motion.div
            className={ selected === index ? 'title-projects selected' : 'title-projects'} key={index} onClick={()=>{
            toggleSelected(index)
            handleGenreClick(title.value)
            }}>
            {title.title}
          </motion.div>
        ))}
    </div>
  )
}

export default TitleProjects