import { useState } from 'react';
import './Navbar.scss';
import { useTransform, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Links from './Links';
import LogoSeq from '../Home/Logo/LogoSeq';

const Navbar = () => {

    const [hidden, setHidden] = useState(false);
    // הוסר useRef כיוון שלא נחוץ לאנימציה זו
    const { scrollYProgress, scrollY } = useScroll();
    
    // אנימציה: שינוי קנה מידה של הלוגו (1 -> 0.18)
    const scaleProgress = useTransform(scrollYProgress, [0, 0.1], [1, 0.18]);
    // אנימציה: שינוי גובה סרגל הניווט (90vh -> 8vh)
    const heightProgress = useTransform(scrollYProgress, [0, 0.1], ['90vh', '8vh']);
    
    
    useMotionValueEvent(scrollY, 'change', (latest) => {
        
        // --- קטע זה הוסר לחלוטין מכיוון שהוא לא נחוץ ועלול לגרום לשגיאות ---
        /*
        if(ref.current?.setDirection && ref.current?.play){
            if(scrollYProgress.get() > 0.1){
                ref.current.setDirection(1)
                ref.current.play()
            }else{
                ref.current.setDirection(-1)
                ref.current.play()
            }
        }
        */
        // ------------------------------------------------------------------
        
        // לוגיקת הסתרה/הצגה: נסתר אם גוללים למטה ועברנו 600px
        const previous = scrollY.getPrevious()
        
        if (previous < latest && latest > 600) {
            setHidden(true)
        } else if (previous > latest) {
            setHidden(false)
        }
    });

    return (
        // הסרנו position: 'fixed' מה-style, הוא מוגדר ב-CSS
        <motion.nav 
            className="navbar" 
            variants={{
                visible: { y: 0, transition: { duration: 0.8 , ease: 'easeInOut' } },
                hidden: { y: '-100%', transition: { duration: 0.8 , ease: 'easeInOut' } },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ height: heightProgress }} 
        >
            
            <Links/>
            
            <motion.div className="logo-container" style={{ scale: scaleProgress }}>
                <LogoSeq scrollYProgress={scrollYProgress}/>
            </motion.div>
            
        </motion.nav>
    );
};

export default Navbar;