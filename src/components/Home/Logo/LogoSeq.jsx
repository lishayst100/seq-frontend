import React from "react";
import Seq from "../../../images/SEQ (1).png";
import U from "../../../images/U (1).png";
import E from "../../../images/E (1).png";
import N from "../../../images/N (1).png";
import C from "../../../images/C (1).png";
import asterisk from "../../../images/asterisk (1).png";
import E2 from "../../../images/E_02 (1).png";
import { motion, useTransform } from "framer-motion";

const LogoSeq = ({scrollYProgress}) => {

    const translateX = useTransform(scrollYProgress, [0, 0.1], ['0', '-100%']);
    const scale = useTransform(scrollYProgress, [0, 0.1,0.15], [1, 0.25 ,0]);
    const rotate = useTransform(scrollYProgress, [0, 0.1], [0,-180]);
   

  return (
    <motion.div className="pt-5 d-flex gap-3 sequence-logo" >
      <img src={Seq} alt="..." className=" seq overflow-hidden"/>
      <motion.img src={asterisk} alt="..." className="asterisk" style={{rotate}}/>
      <motion.div className=" d-flex gap-3 justify-content-center uence" style={{scale,translateX}} >
        <motion.img src={U} alt="..."  />
        <img src={E} alt="..." />
        <img src={N} alt="..." />
        <img src={C} alt="..." />
        <img src={E2} alt="..." />
      </motion.div>
    </motion.div>
  );
};

export default LogoSeq;
