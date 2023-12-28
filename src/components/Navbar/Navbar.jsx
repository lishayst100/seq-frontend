import React, { useRef } from 'react';
import './Navbar.scss'; // Import your CSS file
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import { FaVimeoV, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useTransform, motion, useScroll } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../lottie/navbarAnimation.json'; // Replace with your animation JSON

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const logoRef = useRef(null)
  const scaleProgress = useTransform(scrollYProgress, [0, 0.1], [1, 0.1]);
  const transformXProgress = useTransform(scrollYProgress, [0, 0.1], ['0', '-44%']);
  const transformYProgress = useTransform(scrollYProgress, [0, 0.1], ['0', '-55%']);
  const heightProgress = useTransform(scrollYProgress, [0, 0.1], ['93vh', '8vh']);
  const positionProgress = useTransform(scrollYProgress, [0, 0.1], ['block', 'fixed']);
  

  return (
    <motion.nav className="navbar" style={{height:heightProgress,position:positionProgress}}>
      <div className="links-social">
        <NavLink className="link">Projects</NavLink>
        <NavLink className="link">About</NavLink>
        
        
        <NavLink className="link">Contact</NavLink>
        <FaInstagram className="link" />
        <FaFacebookF className="link" />
        <FaVimeoV className="link" />
        
      </div>

      <motion.div className="logo-container" style={{ scale: scaleProgress ,translateX:transformXProgress,translateY:transformYProgress}}>
        <Lottie animationData={animationData} autoplay={false} lottieRef={logoRef}/>
       
      </motion.div>

    </motion.nav>
  );
};

export default Navbar;
