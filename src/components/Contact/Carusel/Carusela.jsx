import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../../images/logo.png'
import { silders } from './carouselImages';
import { useResize } from '../../../hooks/useResize';


const Carusela = () => {
    const resize = useResize()
  return (
    <div className='carousel'>
        <Carousel fade>
        {
            silders.map(slider => (
                <Carousel.Item key={slider}>
                    <img src={slider} alt='...' style={{height:resize > 800 ? 450 : 200, width:'100%', objectFit:'cover'}}/>
                </Carousel.Item>
            ) )
        }
        </Carousel>
    </div>
  )
}

export default Carusela