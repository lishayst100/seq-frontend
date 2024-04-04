import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Text = () => {
  const content = [
    "For potential projects and collabrations, fell free to send us a message.",
    "We look forward creating with you!"
  ];
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: "-300%" },
    show: { y: "0%", transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <AnimatePresence initial="false">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="  text-contact-container mx-auto justify-content-center d-flex flex-column "
      >

        {
          content.map(text => (
            <div className="container mx-auto d-flex justify-content-center overflow-hidden flex-column" key={text}>
          <motion.p variants={item} className="text-black contact-text" >
            {text}
          </motion.p>
        </div>
          ))
        }
    
      </motion.div>
    </AnimatePresence>
  );
};

export default Text;
