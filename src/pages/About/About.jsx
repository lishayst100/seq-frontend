import React from 'react'
import transition from '../../transition'
import GoogleReviews from '../../components/About/GoogleReviews/GoogleReviews'
import Skills from '../../components/About/Skills/Skills'
import Text from '../../components/About/Text/Text'
import Brands from '../../components/About/Brands/Brands'
import Team from '../../components/About/Team/Team'
import '../../components/About/About.scss'

const About = () => {
  return (
    <main className='bg-white about-padding gothic-font'>

      <section className='container mx-auto review-container' aria-labelledby="about-us-title">
        <h3 id="about-us-title" className='font-bolder text-black text-start title-team p-2'>
          About Us
        </h3>
        <div 
          className='d-flex justify-content-between gap-5 flex-column p-2 flex-lg-row align-items-center'
          role="region"
          aria-label="מידע אודות החברה"
        >
          <Text />
          <Brands />
        </div>
      </section>

      <section aria-label="צוות החברה">
        <Team />
      </section>

      <section aria-label="כישורים ומיומנויות">
        <Skills />
      </section>

      <section aria-label="ביקורות גוגל ודירוגים">
        <GoogleReviews />
      </section>

    </main>
  )
}

export default transition(About)
