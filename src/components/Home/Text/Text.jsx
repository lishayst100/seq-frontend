import React, { useRef } from "react";
import "./Text.scss";
import { easeInOut, motion, useInView } from "framer-motion";

const Text = () => {
  const ref = useRef(null);

  const variants = {
    initial: {
      y: "-30vh",
      opacity: 0,
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
  };
  return (
    <motion.div
      className="text-header d-flex justify-content-center align-items-center flex-column"
      ref={ref}
      style={{ zIndex: 55 }}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.p className="text-desc">
        Sequence Studio is a creative boutique studio providing creative
        solutions and productions services including design ,animation & visual
        effects for varius media forms - television, internet and film. We
        specialize in the development and production of commercials, animations
        films, promotional and product videos, from concept stage to final.\
        <motion.span whileHover={{ scale: 1.1 }} className="hi">
          
          Say hi...
        </motion.span>
      </motion.p>
     {/*  <motion.div initial={{translateY: '-100', overflow: 'hidden'}} style={{backgroundColor:'red'}}>
        Sequence Studio is a creative boutique studio providing creative
        solutions and
      </motion.div>
      <motion.div>
        productions services including design ,animation & visual effects for
        varius media forms - television, internet and film.
      </motion.div>
      <motion.div>
        television, internet and film. We specialize in the development and
        production of commercials,
      </motion.div>
      <motion.div>
          animations
        films, promotional and product videos, from concept stage to final.
      </motion.div> */}
    </motion.div>
  );
};

export default Text;
