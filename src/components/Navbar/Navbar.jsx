import {useRef, useState} from 'react';
import './Navbar.scss';
import { useTransform, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Links from './Links';
import LogoSeq from '../Home/Logo/LogoSeq';




const Navbar = () => {

  const [hidden, setHidden] = useState(false);
  const { scrollYProgress,scrollY } = useScroll();
  const ref = useRef(null)
  const scaleProgress = useTransform(scrollYProgress, [0, 0.1], [1, 0.18]);
  const heightProgress = useTransform(scrollYProgress, [0, 0.1], ['90vh', '8vh']);
  
  
  useMotionValueEvent(scrollY, 'change',(latest) => {

    if(ref.current?.setDirection && ref.current?.play){
      if(scrollYProgress.get() > 0.1){
        ref.current.setDirection(1)
        ref.current.play()
    }else{
        ref.current.setDirection(-1)
        ref.current.play()
    }
    }

    
    
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
      visible:{y:0, transition: {duration: 0.8 , ease: 'easeInOut'}},
      hidden:{y: '-100%' , transition: {duration: 0.8 , ease: 'easeInOut'}},
    }}
    animate={hidden ? 'hidden' : 'visible'}
    transition={{duration:0.35,ease:'easeInOut'}}
    style={{height: heightProgress, position: 'fixed'}}>
      
      <Links/>
      
      <motion.div className="logo-container" style={
        { scale: scaleProgress
        }}>

       <LogoSeq scrollYProgress={scrollYProgress}/>
      </motion.div>
      
      
    </motion.nav>
  
    
  );
};

export default Navbar;