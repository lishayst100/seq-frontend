import {useState} from 'react';
import './Navbar.scss'; // Import your CSS file
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import { FaVimeoV, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useTransform, motion, useScroll,useMotionValue, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollYProgress,scrollY } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 0.1], [1, 0.2]);
  const transformXProgress = useTransform(scrollYProgress, [0, 0.1], ['0', '-44%']);
  const transformYProgress = useTransform(scrollYProgress, [0, 0.1], ['0', '-55%']);
  const heightProgress = useTransform(scrollYProgress, [0, 0.1], ['93vh', '8vh']);
  
  useMotionValueEvent(scrollY, 'change',(latest) => {
    
    const previous = scrollY.getPrevious()
    if( previous < latest && latest > 600){
      setHidden(true)
    }else{
      setHidden(false)
    }
  })

  return (
    <motion.nav className="navbar" 
    variants={{
      visible:{y:0},
      hidden:{y: '-100%'}
    }}
    animate={hidden ? 'hidden' : 'visible'}
    transition={{duration:0.35,ease:'easeInOut'}}
    style={{height: heightProgress,position:'fixed'}}>
      <div className="links-social">
        <NavLink className="link">Projects</NavLink>
        <NavLink className="link" to={'/about'}>About</NavLink>
        
        
        <NavLink className="link">Contact</NavLink>
        <FaInstagram className="link" />
        <FaFacebookF className="link" />
        <FaVimeoV className="link" />
        
      </div>

      <motion.div className="logo-container" style={{ scale: scaleProgress ,translateX:transformXProgress,translateY:transformYProgress}}>
        <motion.img
          src={logo}
          alt="Logo"
          
        />
       
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
