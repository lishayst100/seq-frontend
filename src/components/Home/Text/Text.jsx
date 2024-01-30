import React, { useEffect, useRef } from "react";
import "./Text.scss";
import { easeInOut, motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDimensions } from "../../Responsive Navbar/use-dimensions";

const Text = () => {
  const containerRef = useRef(null)
  const nav = useNavigate()
  

  const string = 'Sequence Studio is a creative boutique studio providing creative solutions and productions services including design ,animation & visual effects for varius media forms - television, internet and film. We specialize in the development and production of commercials, animations films, promotional and product videos, from concept stage to final.'.split(' ')

  



  return (
      <p className="d-flex flex-wrap  container mx-auto text-header" ref={containerRef}>
        {
          string.map((word,i) => (
            <motion.span key={i}
             className="text-desc"
             initial={{opacity: 0}} 
             whileInView={{opacity: 1 , transition: {duration: 1}}} 
             viewport={{margin: '-15% 0px -15% 0px '}}
             
             >{`${word}`}&nbsp;</motion.span>
          ))
        }
        <motion.span className="hi"
        onClick={()=>{nav('/about')}}
        initial={{opacity: 0}} 
        whileInView={{opacity: 1 , transition: {duration: 1}}} 
        viewport={{margin: '-15% 0px -15% 0px '}}
        whileHover={{scale:1.1}}
        >
          Say Hi!
        </motion.span>
      </p>
  );
};

export default Text;


//text-desc text-header hi