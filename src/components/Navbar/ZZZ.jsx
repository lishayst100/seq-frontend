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

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const minHeight = windowDimensions.height * 0.08 + "px"; // 8% of window height
  const maxHeight = windowDimensions.height * 0.93 + "px"; // 93% of window height

  const scaleProgress = useTransform(scrollYProgress, [0, 0.1], [1, 0.1]);
  const transformXProgress = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["0%", "-40%"]
  );
  const transformYProgress = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["0%", "-55%"]
  );
  const heightProgress = useTransform(
    scrollYProgress,
    [0, 0.1],
    [maxHeight, minHeight]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous < latest && latest > 600) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 300) {
      setClick(true);
      ref.current.setDirection(1)
      ref.current.play();
      console.log("shrink animation" , latest);
    } else {
      setClick(false);
      ref.current.setDirection(-1)
      ref.current.play()
      console.log("bigger animation" , latest);
    }
  });
  return (
    <motion.nav
      className="navbar bg-primary"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
        big: {
          height: 800,
        },
        small: {
          height: 60,
        },
      }}
      animate={click === true ? "small" : "big"}
      initial={{ height: 800 }}
      transition={{ duration: 1 }}
      style={{ position: "fixed" }}
    >
      <Links />

      <motion.div
        variants={{
          logoSmaller: {
            scale: 0.1,
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
