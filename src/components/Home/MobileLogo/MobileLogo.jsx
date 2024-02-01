import React, { useEffect, useRef } from 'react'
import logo2 from '../../../images/logo2.png'
import logo from '../../../images/logo.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useResize } from '../../../hooks/useResize'

const MobileLogo = () => {
 const width = useResize()
 
 

  return (
    <div style={{ height: '85vh',position:'relative'}} className='d-flex justify-content-center align-items-center'>
        <img src={width > 650 ? logo : logo2} alt="mobile-logo" style={{ width: '70%', objectFit: 'cover'}} />
    </div>
  )
}

export default MobileLogo