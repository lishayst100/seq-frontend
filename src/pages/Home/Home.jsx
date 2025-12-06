import React, { useEffect, useRef, useState } from 'react';
import Video from '../../components/Home/Video/Video';
import './Home.scss';
import Text from '../../components/Home/Text/Text';
import Projects from '../../components/Projects/Projects';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { useResize } from '../../hooks/useResize';
import transition from '../../transition';
import ResNavbar from '../../components/Navbar/ResNavbar';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import MobileLogo from '../../components/Home/MobileLogo/MobileLogo';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const isMobile = useResize();
  const [isAnimated, setIsAnimated] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const reelRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#reel' && reelRef.current) {
      reelRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const paddingProgress = useTransform(scrollYProgress, [0, 0.1], ['93vh', '50vh']);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (scrollY.get() > 50) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  });

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
         {/*  <section
            ref={reelRef}
            aria-label="Intro video section"
            tabIndex={-1}
          >
            <Video />
          </section> */}
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
