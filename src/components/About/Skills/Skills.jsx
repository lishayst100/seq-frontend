import React from "react";
import circle1 from "../../../images/Circle icons_01.png";
import circle2 from "../../../images/Circle icons_02.png";
import circle3 from "../../../images/Circle icons_03.png";
import circle4 from "../../../images/Circle icons_04.png";
import circle5 from "../../../images/Circle icons_05.png";
import circle6 from "../../../images/Circle icons_06.png";
import {  AnimatePresence, motion } from "framer-motion";

const Skills = () => {
  const images = [circle1, circle2, circle3, circle4, circle5, circle6];

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: '-300%'},
    show: { opacity: 1,y: '0%', transition: {duration: 0.7, ease: 'easeOut'} },
    
  };

  return (
    <AnimatePresence initial={true}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="bg-blue skills d-flex gap-2 gap-lg-5 justify-content-center p-2 "
      >
        {images.map((image,index) => (
          <div key={index} className="d-flex justify-content-center align-items-center gap-3 overflow-hidden ">

         
            <motion.img
              
              src={image}
              alt="circle1"
              variants={item}
              className="image-footer"
            />
             </div>
        ))}
      </motion.div>
      </AnimatePresence>
    
  );
};

export default Skills;
