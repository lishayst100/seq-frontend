import React, { useEffect ,createContext,useState} from 'react'
import { BASE_URL } from '../utils/utils';


const ProjectContext = createContext(null);

const ProjectContextProvider = ({children}) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([])
    const [text, setText] = useState([])
    const [showreel, setShowreel] = useState([])
    
    const getProjects = () => {
        setIsLoading(true);
        fetch(`${BASE_URL}/projects/getProjects`)
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
          setProjects(data)
       }) 
        .catch( err => console.log(err) )
    }

    const projectsFilter = (filter) => {
      setIsLoading(true);
         fetch(`${BASE_URL}/projects/findProjectByGenre/${filter}`)
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
          setProjects(data)
        }) 
        .catch( err => console.log(err) )

        
    }


    const getCarousel = () => {
      fetch(`${BASE_URL}/carousel/`)
      .then(res => res.json())
      .then(result => {
          setIsLoading(false)
          setImages(result[0].url)})
    }
    const getText = () => {
      fetch(`${BASE_URL}/text/`)
      .then(res => res.json())
      .then(result => {
          setIsLoading(false)
          setText(result)})
    }
    const getShowreel = () => {
      fetch(`${BASE_URL}/showreel/getShowreel`)
      .then(res => res.json())
      .then(result => {
          setIsLoading(false)
          setShowreel(result)})
    }

   


  return (
    <ProjectContext.Provider value={{projects,getProjects,projectsFilter,isLoading,images,getCarousel,text,getText,showreel,getShowreel}}>{children}</ProjectContext.Provider>
  )
}

export default ProjectContextProvider

export { ProjectContext}