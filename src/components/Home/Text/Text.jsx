import React, { useRef } from "react";
import "./Text.scss";
import { easeInOut, motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Text = () => {
  const ref = useRef(null);
  const nav = useNavigate()
  const string = 'Sequence Studio is a creative boutique studio providing creative solutions and productions services including design ,animation & visual effects for varius media forms - television, internet and film.We specialize in the development and production of commercials, animations films, promotional and product videos, from concept stage to final.'.split(' ')

  return (
    <motion.p
      className=" container mx-auto text-header  d-flex justify-content-center"
      ref={ref}
    >
      <div className="">

      
      {string.map((text, i) => (
       
          <motion.span
            key={i}
            className="text-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 , delay: i * 0.03} }}
            viewport={{ margin: "-5%" }}
          >
            {`${text} `}
          </motion.span>
       
      ))}
      <motion.span
        onClick={()=>{nav('/about')}}
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 ,delay: (string.length - 1) * 0.03} }}
        viewport={{ margin: "-15%" }}
        className="hi"
      >
        Say hi...
      </motion.span>
      </div>
    </motion.p>
  );
};

export default Text;


