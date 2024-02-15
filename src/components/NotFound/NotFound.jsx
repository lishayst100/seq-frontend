import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import transition from '../../transition'

const NotFound = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' >
        <div style={{height: '60vh'}} className='d-flex justify-content-center align-items-center flex-column'>
        <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/about'>Blog</Link>
            <Link to='/contact'>Contact</Link> 
        </div>
        
            <Footer scrollProgress={0}/>
    </div>
  )
}

export default transition(NotFound) 