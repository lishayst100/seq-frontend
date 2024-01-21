import React from "react";
import Seq from "../../../images/SEQ (2).png";
import asterisk from "../../../images/asterisk (1).png";
import uence from '../../../images/UENCE.png'
import { motion, useTransform } from "framer-motion";


const LogoSeq = ({scrollYProgress}) => {

    const translateX = useTransform(scrollYProgress, [0, 0.1], ['0', '-100%']);
    const scale = useTransform(scrollYProgress, [0, 0.07,0.1], [1, 0.7 ,0]);
    const rotate = useTransform(scrollYProgress, [0, 0.1], [0,-180]);
   

  return (
    <motion.div className="pt-5 d-flex gap-3 sequence-logo" >
      <img src={Seq} alt="..." className=" seq "/>
      <motion.img src={asterisk} alt="..." className="asterisk" style={{rotate}}/>
      <motion.div className=" d-flex  uence " style={{scale,translateX}} >
          <img src={uence} alt="..." />
      </motion.div>
    </motion.div>
  );
};

export default LogoSeq;
