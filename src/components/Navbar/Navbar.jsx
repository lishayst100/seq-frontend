import {useState} from 'react';
import './Navbar.scss'; // Import your CSS file
import logo from '../../images/logo.png';
import { useTransform, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Links from './Links';


const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollYProgress,scrollY } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 0.1], [1, 0.1]);
  const transformXProgress = useTransform(scrollYProgress, [0, 0.1], ['0', '-48%']);
  const transformYProgress = useTransform(scrollYProgress, [0, 0.1], ['0', '-58%']);
  const heightProgress = useTransform(scrollYProgress, [0, 0.1], ['93vh', '7vh']);
  
  
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
      <Links/>

      <motion.div className="logo-container" style={
        { scale: scaleProgress ,
        translateX:transformXProgress
        ,translateY:transformYProgress,
        position:'stick'
        }}>
        <motion.img
          src={logo}
          alt="Logo"
          
        />
       
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
