import React from 'react'
import FooterLogo from './FooterLogo'
import './Footer.scss'
import SocialFooter from './SocialFooter'
import Contact from './Contact'
import Copyright from './Copyright'


const Footer = () => {
    
  return (
    <footer className='black text-white d-flex flex-column'>
        <FooterLogo/>
    <div className='d-flex flex-row-reverse justify-content-between p-3 text-section'>
        <SocialFooter/>
        <div className='d-flex flex-column justify-content-between  text-start'>
            <Contact/>
            <Copyright/>
        </div>
    </div>
        
    </footer>
  )
}

export default Footer