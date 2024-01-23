import React from "react";
import { FaSquare } from "react-icons/fa";
import circle1 from "../../../images/Circle icons_01.png";
import circle2 from "../../../images/Circle icons_02.png";
import circle3 from "../../../images/Circle icons_03.png";
import circle4 from "../../../images/Circle icons_04.png";
import circle5 from "../../../images/Circle icons_05.png";
import circle6 from "../../../images/Circle icons_06.png";
import { AnimatePresence, motion } from "framer-motion";

const Skills = () => {
  const images = [circle1, circle2, circle3, circle4, circle5, circle6];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: "-200%" },
    show: { opacity: 1, y: "0%", transition: { duration: 1.2 } },
    
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "200px" }}
        className="bg-blue skills d-flex gap-2 gap-lg-5 justify-content-center p-2  "
      >
        {images.map((image,index) => (
          <div
            className="overflow-hidden  d-flex justify-content-center align-items-center"
            key={image}
          >
            <motion.img
              src={image}
              alt="circle1"
              variants={item}
              className="image-footer"
              initial="hidden"
              whileInView= {{ opacity: 1, y: "0%", transition: { duration: 0.8,delay: index * 0.2 } }}
            
            
            
            />
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Skills;
