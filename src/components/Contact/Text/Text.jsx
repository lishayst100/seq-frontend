
import React from "react";
import {motion} from 'framer-motion'


const Text = () => {
 

  

  const variants ={
    initial: { y: '-200%',opacity:0},
    animate: { y: 0,opacity: 1, transition: {duration: 1}},
    initial2 : { y: '-200%'},
    animate2 : { y: 0,opacity: 1, transition: {duration:1,delay: 0.3 }}

  }

  return (
    <div className=" w-50 mx-auto  justify-content-center d-flex flex-column">

   
    <div className="container mx-auto d-flex justify-content-center overflow-hidden flex-column  ">
      <motion.p variants={variants} initial='initial' animate='animate'  className="text-black contact-text">
        For potential projects and collabrations, fell free to send us a
        message.
       
      </motion.p>
      </div>

      <div className="container mx-auto d-flex justify-content-center overflow-hidden flex-column ">
      <motion.p className="text-black contact-text" initial='initial' animate='animate2' variants={variants}>
            We look forward creating with you!
      </motion.p>
      </div>

      
      
     
      
    
    </div>
  );
};

export default Text;
