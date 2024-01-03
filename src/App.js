import './App.css';
import { useContext, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { ProjectContext } from './context/ProjectContext';
import ProjectDetails from './components/Project-Details/ProjectDetails';
import ProjectViewer from './components/Project-Details/ProjectViewer';

function App() {

  const {getProjects} = useContext(ProjectContext)
  useEffect(()=>{
    getProjects()
  },[])
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectViewer />} />
        </Routes>
    </div>
  );
}

export default App;
