import { useState, useEffect, useRef } from "react";
import {
  useTransform,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../lottie/navbarAnimation.json";
import Links from "./Links";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
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

  /* useMotionValueEvent(scrollY, "change", (latest) => {
 
  }); */
  return (
    <motion.nav
      className="navbar"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
        big: {
          height: 700,
        },
        small: {
          height: 60,
        },
      }}
      animate={click === true ? "small" : "big" || hidden ? "visible" : "hidden"}
      initial={{ height: 700 }}
      transition={{ duration: 1 , ease: "easeInOut" }}
      style={{ position: "fixed" }}
    >
      <Links />

      <motion.div
        variants={{
          logoSmaller: {
            scale: 0.15,
            transition: { duration: 1, ease: "easeInOut" },
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
        /* style={{
          scale: scaleProgress,
          translateX: transformXProgress,
          translateY: transformYProgress,
        }} */
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
