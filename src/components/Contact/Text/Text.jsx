
import React from "react";
import {motion} from 'framer-motion'


const Text = () => {
 

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        
        staggerChildren: 0.2,
        
      }
    }
  }

  const item = {
    hidden: {  y: '-300%'},
    show: { y: '0%', transition: {duration: 0.7, ease: 'easeOut'} },
    
  };

  

  return (
    <motion.div 
    variants={container}
    initial="hidden"
    animate="show"
    className="  text-contact-container  mx-auto  justify-content-center d-flex flex-column ">

   
    <div className="container mx-auto d-flex justify-content-center overflow-hidden flex-column   ">
      <motion.p variants={item}  className="text-black contact-text">
        For potential projects and collabrations, fell free to send us a
        message.
       
      </motion.p>
      </div>

      <div className="container mx-auto d-flex justify-content-center overflow-hidden flex-column ">
      <motion.p className="text-black contact-text" variants={item}>
            We look forward creating with you!
      </motion.p>
      </div>

      
      
     
      
    
    </motion.div>
  );
};

export default Text;
