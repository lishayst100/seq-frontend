import React from 'react'
import transition from '../../transition'
import GoogleReviews from '../../components/About/GoogleReviews/GoogleReviews'
import Skills from '../../components/About/Skills/Skills'
import Text from '../../components/About/Text/Text'
import Brands from '../../components/About/Brands/Brands'
import Team from '../../components/About/Team/Team'
import Footer from '../../components/Footer/Footer'
import '../../components/About/About.scss'


const About = () => {


  
  return (
    <div className='bg-white'>
      
      <div className='container mx-auto review-container'>
        <h3 className='font-bolder text-black text-start title-team p-2'>About Us</h3>
      <div className='d-flex justify-content-between gap-5 flex-column p-2 flex-lg-row align-items-center '>
      
      <Text/>
      <Brands/>
      </div>
      </div>
     
      <Team/>
      <Skills/>
      <GoogleReviews/>
      <Footer scrollProgress={0.8}/>
    </div>
  )
}

export default transition(About) 