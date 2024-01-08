import { useState,  useRef } from "react";
import {motion,useScroll,useMotionValueEvent} from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../lottie/navbarAnimation.json";
import Links from "./Links";
import { useResize } from "../../hooks/useResize";


const Navbar = () => {
  const isMobile = useResize() 
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const { scrollY } = useScroll();
  const ref = useRef(null);
 
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous < latest && latest > 600) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 50) {
        setClick(true);
        ref.current.setDirection(1)
        ref.current.play();
      } else {
        setClick(false);
        ref.current.setDirection(-1)
        ref.current.play()
      }
  });

 
  return (
    <motion.nav
      className="navbar"
      variants={{
        visible: { y: 0 ,
        transition:{duration:0.35 , ease: 'easeInOut'}
        },
        hidden: { y: "-100%" ,
        transition:{duration:0.35 , ease: 'easeInOut'}},
        big: { height: isMobile < 800 ? '50vh' : '80vh',},
        small: { height: '8vh',}
      }}
      animate={hidden ? "hidden" : (click ? "small" : "big")}
      initial={hidden ? "small" : "big"}
      transition={{ duration: 0.8 , ease: "easeInOut" }}
      style={{ position: "fixed" }}
    >
      <Links />

      <motion.div
        variants={{
          logoSmaller: {
            scale: 0.15,
            transition: { duration: 0.8, ease: "easeInOut" },
            translateX: "-40%",
            translateY: "-54%",
          },
          logoBigger:{
            scale: 1,
            transition: { duration: .75, ease: "easeInOut" },
            translateX: "0%",
            translateY: "0%",
          }
        }}
        animate={click === true? "logoSmaller" : "logoBigger"}
        className="logo-container"
        
      >
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
