import './App.css';
import { useContext, useEffect} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { ProjectContext } from './context/ProjectContext';
import ProjectViewer from './components/Project-Details/ProjectViewer';
import Contact from './pages/Contact/Contact';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/ResNavbar';



function App() {
  const location = useLocation()
  const {getProjects,getCarousel} = useContext(ProjectContext)
  useEffect(()=>{
    getProjects()
    getCarousel()
  },[])

  
  
  return (
    <div className="App">
        {location.pathname !== '/' && <Navbar/>}
       <AnimatePresence mode='wait' initial={false} >
       <ScrollToTop/>
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
