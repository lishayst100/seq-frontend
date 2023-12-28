import logo from './logo.svg';
import './App.css';
import { arr } from './services/utils';
import { useEffect, useRef, useState } from 'react';
import { useScroll,motion, useTransform } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';

function App() {

  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/api/projects/getProjects')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  },[])
  const ref= useRef(null)
  const { scrollYProgress} = useScroll({target: ref,offset:['0 1' ,'1.33 1']})
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.5])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const translateZProgress = useTransform(scrollYProgress,[0,1],[300,-200])
  const translateYProgress = useTransform(scrollYProgress,[0,1],[300,-200])
  const arr2 = [212,3123,1,32,45,35,34,45,6,4567,567,68,87,65,2,4,]
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Projects data={data} />} />
        </Routes>
        <motion.div className='container mx-auto d-flex flex-column gap-2'ref={ref} >
        {arr2.map((item,index) => <motion.div key={index}  style={{translateY:translateYProgress, opacity: opacityProgress,width:200, height:200 ,backgroundColor:'red',scale:scaleProgress ,translateX:translateZProgress}}>{item}</motion.div>)}
        </motion.div>
      
    </div>
  );
}

export default App;
