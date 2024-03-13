import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../lottie/footer.json';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';


const FooterLogo = ({ scrollProgress }) => {

  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll();


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
