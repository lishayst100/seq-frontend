import React from "react";
import Seq from "../../../images/SEQ (2).png";
import asterisk from "../../../images/asterisk (1).png";
import uence from '../../../images/UENCE (1).png'
import { motion, useTransform } from "framer-motion";


const LogoSeq = ({scrollYProgress}) => {

    const translateX = useTransform(scrollYProgress, [0, 0.1], ['0', '-100%']);
    const scale = useTransform(scrollYProgress, [0, 0.07, 0.1], [1, 0.7, 0]);
    const rotate = useTransform(scrollYProgress, [0, 0.1], [0, -180]);
    
    return (
        <motion.div 
            className="sequence-logo d-flex align-items-center justify-content-center"
        >
            {/* חלק SEQ: 673x211 */}
            <img 
                src={Seq} 
                alt="Sequence logo, part SEQ" 
                className="seq"
                // תיקון CLS קריטי
                width={673} 
                height={211} 
                loading="eager" 
            />
            
            {/* חלק Asterisk: 82x88 */}
            <motion.img 
                src={asterisk} 
                alt="Asterisk element in logo" 
                className="asterisk" 
                style={{rotate}}
                // תיקון CLS קריטי
                width={82} 
                height={88} 
                loading="eager" 
            />
            
            {/* חלק UENCE: 1118x196 */}
            <motion.img 
                src={uence} 
                alt="Sequence logo, part UENCE" 
                style={{scale, translateX}} 
                className="uence"
                // תיקון CLS קריטי
                width={1118} 
                height={196} 
                loading="eager" 
            />
            
        </motion.div>
    );
};

export default LogoSeq;