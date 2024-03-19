import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../lottie/footer.json';
import {  motion } from 'framer-motion';


const FooterLogo = () => {

  const ref = useRef(null);


  return (
    <motion.div className='d-flex justify-content-center align-items-center footer-logo' 
    onViewportEnter={()=>{
      ref.current.setDirection(1);
      ref.current.play();
    }}
    onViewportLeave={()=>{
      ref.current.goToAndStop(0)
    }}
    
    >
      <Lottie animationData={animationData} lottieRef={ref} loop={false} autoplay={false} />
    </motion.div>
  );
};

export default FooterLogo;
