import React from 'react'
import logo from '../../../images/logo2.png'
const MobileLogo = () => {
  return (
    <div style={{ height: '93vh'}} className='d-flex justify-content-center align-items-center'>
        <img src={logo} alt="mobile-logo" style={{width: '70%', objectFit: 'cover', position:'fixed' ,zIndex: 2}} />
    </div>
  )
}

export default MobileLogo