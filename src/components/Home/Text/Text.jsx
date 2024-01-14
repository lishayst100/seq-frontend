import React, { useRef } from "react";
import "./Text.scss";
import { easeInOut, motion, useInView } from "framer-motion";

const Text = () => {
  const ref = useRef(null);
  const textHome = [
    "Sequence Studio is a creative boutique studio providing creative solutions and productions services",
    "including design ,animation & visual effects for varius media forms - television, internet and ",
    "film. television, internet and film. We specialize in the development and production of commercials,",
    "animations films, promotional and product videos, from concept stage to final.",
  ];

  const variants = {
    initial: {
      y: "-30vh",
      opacity: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <motion.p
      className=" container mx-auto text-header d-flex justify-content-center align-items-start flex-column overflow-hidden text-align-start "
      /* ref={ref}
      style={{ zIndex: 55 }}
      variants={variants}
      initial="initial"
      whileInView="animate" */
    >
      {/* <motion.p className="text-desc">
        Sequence Studio is a creative boutique studio providing creative
        solutions and productions services including design ,animation & visual
        effects for varius media forms - television, internet and film. We
        specialize in the development and production of commercials, animations
        films, promotional and product videos, from concept stage to final.
        <motion.span whileHover={{ scale: 1.1 }} className="hi">
          
          Say hi...
        </motion.span>
      </motion.p> */}

      {textHome.map((text, i) => (
         
          <motion.span
            key={i}
            className="text-desc "
            initial={{y: '-200%',opacity:0}}
            whileInView={{ y: 0, transition: {duration: .5 ,delay: i * 0.5}, opacity:1}}
            
          >
            {text}
          </motion.span>
      
        
      ))}
    </motion.p>
  );
};

export default Text;

//initial={{y: '-200%'}} whileInView={{ y: 0, transition: {duration: 1 ,delay: i *0.3}}}
