import React from 'react'
import logo from '../../../images/logo2.png'
const MobileLogo = () => {
  return (
    <div style={{paddingTop: '25%' , paddingBottom: '20%'}}>
        <img src={logo} alt="mobile-logo" style={{width: '70%', objectFit: 'cover'}} />
    </div>
  )
}

export default MobileLogo