import React, { useEffect ,createContext,useState} from 'react'
import { BASE_URL } from '../utils/utils';


const ProjectContext = createContext(null);

const ProjectContextProvider = ({children}) => {
    const [projects, setProjects] = useState([]);
    
    const getProjects = () => {
        fetch(`${BASE_URL}/getProjects`)
        .then(res => res.json())
        .then(data => setProjects(data))
    }

    const projectsFilter = (filter) => {
      /* fetch(`${BASE_URL}/getProjects/${filter}`)
        .then(res => res.json())
        .then(data => setProjects(data)) */

        console.log(`${BASE_URL}/getProjects/${filter}`)
    }

   


  return (
    <ProjectContext.Provider value={{projects,getProjects,projectsFilter}}>{children}</ProjectContext.Provider>
  )
}

export default ProjectContextProvider

export { ProjectContext}