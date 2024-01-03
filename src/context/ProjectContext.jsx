import React, { useEffect ,createContext,useState} from 'react'
import { BASE_URL } from '../utils/utils';


const ProjectContext = createContext(null);

const ProjectContextProvider = ({children}) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const getProjects = () => {
        setIsLoading(true);
        fetch(`${BASE_URL}/getProjects`)
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
          setProjects(data)
       }) 
        .catch( err => console.log(err) )
    }

    const projectsFilter = (filter) => {
      setIsLoading(true);
         fetch(`${BASE_URL}/findProjectByGenre/${filter}`)
        .then(res => res.json())
        .then(data => {
           setIsLoading(false);
          setProjects(data)
        }) 
        .catch( err => console.log(err) )

        
    }

   


  return (
    <ProjectContext.Provider value={{projects,getProjects,projectsFilter,isLoading}}>{children}</ProjectContext.Provider>
  )
}

export default ProjectContextProvider

export { ProjectContext}