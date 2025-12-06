import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProjectViewer from './components/Project-Details/ProjectViewer';
import Contact from './pages/Contact/Contact';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/ResNavbar';
import { useResize } from './hooks/useResize';
import NotFound from './components/NotFound/NotFound';
import AccessabilityStatment from './components/Legal Pages/AccessabilityStatment';
import TermsofUse from './components/Legal Pages/TermsofUse';
import PrivacyPolicy from './components/Legal Pages/PrivacyPolicy';
import { SpeedInsights } from "@vercel/speed-insights/react"



function Appbackup() {
  const location = useLocation()
  const isMobile = useResize()

  return (
    <div className="App">
        {isMobile < 1000 ? <Navbar/> : (location.pathname !== '/' ? <Navbar/> : '')}
       
       <AnimatePresence mode='wait' initial={false}  >
       
       <ScrollToTop/>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project/:id" element={<ProjectViewer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/useOfTerms" element={<TermsofUse />} />
          <Route path="/accessabilityStatment" element={<AccessabilityStatment />} />
        </Routes>
        </AnimatePresence>
        <SpeedInsights />
    </div>
  );
}

export default Appbackup;