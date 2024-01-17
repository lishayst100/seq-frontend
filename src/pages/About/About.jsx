import React from 'react'
import transition from '../../transition'
import GoogleReviews from '../../components/About/GoogleReviews/GoogleReviews'
import Skills from '../../components/About/Skills/Skills'
import Text from '../../components/About/Text/Text'
import Brands from '../../components/About/Brands/Brands'


const About = () => {
  return (
    <div className='bg-white about-padding'>
      <div className='d-flex justify-content-between container mx-auto '>
      
      <Text/>
      <Brands/>
      </div>
      
      <Skills/>
      <GoogleReviews/>
    </div>
  )
}

export default transition(About) 