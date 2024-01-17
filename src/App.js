import './App.css';
import { useContext, useEffect} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { ProjectContext } from './context/ProjectContext';
import ProjectDetails from './components/Project-Details/ProjectDetails';
import ProjectViewer from './components/Project-Details/ProjectViewer';
import Example from './components/Responsive Navbar/Example';
import OtherNavbar from './components/Navbar/OtherNavbar';
import Contact from './pages/Contact/Contact';
import { AnimatePresence } from 'framer-motion';



function App() {
  const location = useLocation()
  const {getProjects,getCarousel} = useContext(ProjectContext)
  useEffect(()=>{
    getProjects()
    getCarousel()
  },[])

  
  
  return (
    <div className="App">
        {location.pathname !== '/' && <OtherNavbar/>}
       <AnimatePresence mode='wait' initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project/:id" element={<ProjectViewer />} />
        </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
