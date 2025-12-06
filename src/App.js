import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/ResNavbar';
import { useResize } from './hooks/useResize';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Loading from './components/loading/Loading';

// 🚀 Lazy Loading לכל העמודים חוץ מ-Home
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const ProjectViewer = lazy(() => import('./components/Project-Details/ProjectViewer'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
const AccessabilityStatment = lazy(() => import('./components/Legal Pages/AccessabilityStatment'));
const TermsofUse = lazy(() => import('./components/Legal Pages/TermsofUse'));
const PrivacyPolicy = lazy(() => import('./components/Legal Pages/PrivacyPolicy'));

function App() {
  const location = useLocation();
  const isMobile = useResize();

  return (
    <div className="App">
      {isMobile < 1000 ? <Navbar /> : (location.pathname !== '/' ? <Navbar /> : null)}

      <AnimatePresence mode="wait" initial={false}>
        <ScrollToTop />

        {/* 🛑 חשוב מאוד: Suspense עוטף את ה-Routes */}
        <Suspense fallback={<Loading/>}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectViewer />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/useOfTerms" element={<TermsofUse />} />
            <Route path="/accessabilityStatment" element={<AccessabilityStatment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

      </AnimatePresence>

      <SpeedInsights />
    </div>
  );
}

export default App;

