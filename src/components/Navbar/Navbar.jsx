import {useRef, useState} from 'react';
import './Navbar.scss'; // Import your CSS file
import logo from '../../images/logo.png';
import { useTransform, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Links from './Links';
import Lottie from 'lottie-react';
import animationData from "../../lottie/navbarAnimation.json";


const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollYProgress,scrollY } = useScroll();
  const ref = useRef()
  const scaleProgress = useTransform(scrollYProgress, [0, 0.1], [1, 0.1]);
  const transformXProgress = useTransform(scrollYProgress, [0, 0.1], ['0', '-48%']);
  const transformYProgress = useTransform(scrollYProgress, [0, 0.1], ['0', '-58%']);
  const heightProgress = useTransform(scrollYProgress, [0, 0.1], ['93vh', '7vh']);
  
  
  useMotionValueEvent(scrollY, 'change',(latest) => {

    if(scrollYProgress.get() > 0.1){
        ref.current.setDirection(1)
        ref.current.play()
    }else if( scrollYProgress.get() < 0.1){
        ref.current.setDirection(-1)
        ref.current.play()
    }
    
    const previous = scrollY.getPrevious()
    if( previous < latest && latest > 600){
      setHidden(true)
    }else{
      setHidden(false)
    }
  })

  return (
    <motion.nav className="navbar "  
    variants={{
      visible:{y:0, transition: {duration: 0.5 , ease: 'easeInOut'}},
      hidden:{y: '-100%' , transition: {duration: 0.5 , ease: 'easeInOut'}},
    }}
    animate={hidden ? 'hidden' : 'visible'}
    transition={{duration:0.35,ease:'easeInOut'}}
    style={{height: heightProgress, position: 'fixed'}}>
      
      <Links/>
      <motion.div className="logo-container" style={
        { scale: scaleProgress ,
       /*  translateX:transformXProgress
        ,translateY:transformYProgress, */
       
        
        }}>
        {/* <motion.img
          style={{objectFit:'cover' , height: '100%', width:'100%'}}
          src={logo}
          alt="Logo"
          
        /> */}

          <Lottie
          animationData={animationData}
          autoplay={false}
          lottieRef={ref}
          loop={false}
        />
        
       
      </motion.div>
      
    </motion.nav>
  );
};

export default Navbar;
