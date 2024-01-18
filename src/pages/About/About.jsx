import React from 'react'
import transition from '../../transition'
import GoogleReviews from '../../components/About/GoogleReviews/GoogleReviews'
import Skills from '../../components/About/Skills/Skills'
import Text from '../../components/About/Text/Text'
import Brands from '../../components/About/Brands/Brands'
import Team from '../../components/About/Team/Team'


const About = () => {
  return (
    <div className='bg-white'>
      <div className='container mx-auto review-container'>
        <h3 className='font-bolder text-black text-start title-team'>About Us</h3>
      <div className='d-flex justify-content-between'>
      <Text/>
      <Brands/>
      </div>
      </div>
     
      <Team/>
      <Skills/>
      <GoogleReviews/>
    </div>
  )
}

export default transition(About) 