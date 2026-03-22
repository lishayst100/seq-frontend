import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useResize } from '../../hooks/useResize';
import transition from '../../transition';

// Components
import Video from '../../components/Home/Video/Video';
import Navbar from '../../components/Navbar/Navbar';
import MobileLogo from '../../components/Home/MobileLogo/MobileLogo';

// Lazy Loading לרכיבים שנמצאים מתחת ל-Fold
const Text = lazy(() => import('../../components/Home/Text/Text'));
const Projects = lazy(() => import('../../components/Projects/Projects'));

const Home = () => {
  const isMobile = useResize();
  const { scrollYProgress } = useScroll();
  const reelRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#reel' && reelRef.current) {
      reelRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const paddingProgress = useTransform(scrollYProgress, [0, 0.1], ['93vh', '50vh']);

  return (
    <div>
      {/* ניווט ראשי - נטען רק בדסקטופ */}
      {isMobile > 1000 && <Navbar />}

      <motion.main
        className="home"
        style={{
          paddingTop: isMobile > 1000 ? paddingProgress : '',
          position: 'relative',
          zIndex: 3,
        }}
        role="main"
        aria-label="Main content of the homepage"
      >
        <div style={{ position: 'relative' }}>
          {/* לוגו נייד - עבר אופטימיזציית Picture */}
          {isMobile <= 1000 && <MobileLogo />}
          
          <section
            ref={reelRef}
            id="reel"
            aria-label="Intro video section"
            tabIndex={-1}
          >
            <Video />
          </section>
        </div>

        {/* Suspense מונע מה-JS של הפרויקטים לחסום את רינדור הלוגו והוידאו */}
        <Suspense fallback={<div style={{ height: '400px', backgroundColor: '#000' }} />}>
          <section aria-label="Studio description">
            <Text />
          </section>

          <section aria-label="Our projects">
            <Projects />
          </section>
        </Suspense>
      </motion.main>
    </div>
  );
};

export default transition(Home);