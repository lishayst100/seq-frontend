import logo from './logo.svg';
import './App.css';
import { arr } from './services/utils';
import { useRef } from 'react';
import { useScroll,motion, useTransform } from 'framer-motion';

function App() {
  const ref= useRef(null)
  const { scrollYProgress} = useScroll({target: ref,offset:['0 1' ,'1.33 1']})
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.5])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const translateZProgress = useTransform(scrollYProgress,[0,1],[300,-200])
  const translateYProgress = useTransform(scrollYProgress,[0,1],[300,-200])
  const arr2 = [1,3,12,45,435,3456,456,45,675,67,67,86,7867,8,5687,85,65,865,865,865,865]
  console.log(arr2)
  
  return (
    <div className="App">
        <h2 className=''>SEQUENCE</h2>
        <motion.div className='container mx-auto d-flex flex-column gap-2'ref={ref} >
        {arr2.map((item,index) => <motion.div key={index}  style={{translateY:translateYProgress, opacity: opacityProgress,width:200, height:200 ,backgroundColor:'red',scale:scaleProgress ,translateX:translateZProgress}}>{item}</motion.div>)}
        </motion.div>
      
    </div>
  );
}

export default App;
