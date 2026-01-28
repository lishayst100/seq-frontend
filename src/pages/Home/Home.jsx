import React, { useEffect, useRef } from 'react';
import Video from '../../components/Home/Video/Video';
import './Home.scss';
import Text from '../../components/Home/Text/Text';
import Projects from '../../components/Projects/Projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useResize } from '../../hooks/useResize';
import transition from '../../transition';
import Navbar from '../../components/Navbar/Navbar';
import MobileLogo from '../../components/Home/MobileLogo/MobileLogo';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const isMobile = useResize();
  // הסרתי את ה-isAnimated כי הוא לא היה בשימוש ב-JSX
  const { scrollYProgress } = useScroll();
  const reelRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#reel' && reelRef.current) {
      reelRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const paddingProgress = useTransform(scrollYProgress, [0, 0.1], ['93vh', '50vh']);

  // הסרתי את ה-useMotionValueEvent כי הוא רק עדכן סטייט שלא היה בשימוש

  return (
    <div>
      {/* ניווט ראשי */}
      {isMobile > 1000 && <Navbar />}

      {/* תוכן ראשי */}
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
          {/* לוגו נייד */}
          {isMobile > 1000 ? '' : <MobileLogo aria-hidden="false" />}
          
          {/* וידאו פתיחה */}
          <section
            ref={reelRef}
            id="reel" // כדאי להוסיף ID אם אתה משתמש ב-Hash
            aria-label="Intro video section"
            tabIndex={-1}
          >
            <Video />
          </section>
        </div>

        {/* טקסט תדמיתי */}
        <section aria-label="Studio description">
          <Text />
        </section>

        {/* פרויקטים */}
        <section aria-label="Our projects">
          <Projects />
        </section>
      </motion.main>
    </div>
  );
};

export default transition(Home);