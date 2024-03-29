import React from "react";
import Seq from "../../../images/SEQ (2).png";
import asterisk from "../../../images/asterisk (1).png";
import uence from '../../../images/UENCE (1).png'
import { motion, useTransform } from "framer-motion";


const LogoSeq = ({scrollYProgress}) => {

    const translateX = useTransform(scrollYProgress, [0, 0.1], ['0', '-100%']);
    const scale = useTransform(scrollYProgress, [0, 0.07,0.1], [1, 0.7 ,0]);
    const rotate = useTransform(scrollYProgress, [0, 0.1], [0,-180]);
   

  return (
    <motion.div className="sequence-logo d-flex  align-items-center justify-content-center"  >
      <img src={Seq} alt="..." className="seq"/>
        <motion.img src={asterisk} alt="..." className="asterisk" style={{rotate}}/>
          <motion.img src={uence} alt="..." style={{scale,translateX}} className="uence"/>
      
    </motion.div>
  );
};

export default LogoSeq;
