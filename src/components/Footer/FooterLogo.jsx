import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../lottie/footer.json';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const FooterLogo = ({ scrollProgress }) => {
  const { pathname } = useLocation();
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({ target: ref });

  const isPathname = () => {
    if (pathname === '/') return 0.8;
    return 0.5;
  };

  const scrollTarget = isPathname();

  useMotionValueEvent(scrollY, 'change', () => {
    if (ref.current?.setDirection && ref.current?.play) {
      if (scrollYProgress.get() > scrollProgress) {
        ref.current.setDirection(1);
        ref.current.play();
      } else {
        ref.current.setDirection(-1);
        ref.current.play();
      }
    }
  });

  return (
    <motion.div className='d-flex justify-content-center align-items-center footer-logo'>
      <Lottie animationData={animationData} lottieRef={ref} loop={false} />
    </motion.div>
  );
};

export default FooterLogo;
