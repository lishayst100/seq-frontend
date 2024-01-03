import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../../lottie/whiteAsterisk.json'


const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <Lottie animationData={animationData} style={{width:200,height:200}}/>  
    </div>
     
  )
}

export default Loading