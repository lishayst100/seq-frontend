import React, { useEffect, useRef } from "react";
import "./Text.scss";
import { easeInOut, motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Text = () => {

  const nav = useNavigate()

  const string = 'Sequence Studio is a creative boutique studio providing creative solutions and productions services including design ,animation & visual effects for varius media forms - television, internet and film.We specialize in the development and production of commercials, animations films, promotional and product videos, from concept stage to final.'.split(' ')


  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1
      }
    }
  }

  const item = {
    hidden: { opacity: 0},
    show: { opacity: 1, transition: {duration: 0.5} },
    
  };

  return (
    <motion.div
      className="text-header container mx-auto"
      variants={container}
      whileInView='show'
      initial='hidden'
    >
      {string.map((text, i) => (
       
          <motion.span
           
            key={i}
            className="text-desc"
            variants={item}
            
           /*  style={{opacity : isInView ? 1 : 0 , transitionDuration: '1s',
              transitionDelay: `${i * 0.03}s` }} */
            
          >
            {`${text} `}
          </motion.span>
       
      ))}
      <motion.span
        onClick={()=>{nav('/about')}}
        whileHover={{ scale: 1.1 , transitionDelay: 0, transitionDuration: 0.1 }}
        /* style={{opacity : isInView ? 1 : 0 ,transitionDuration: '1s',
        transitionDelay: `${string.length * 0.03}s`}} */
        className="hi"
        variants={item}
      >
        Say hi...
      </motion.span>
      
    </motion.div>
  );
};

export default Text;


