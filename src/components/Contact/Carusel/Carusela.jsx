import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../../images/logo.png'
import { silders } from './carouselImages';
import { useResize } from '../../../hooks/useResize';
import { useState } from 'react';
import { BASE_URL } from '../../../utils/utils';


const Carusela = () => {
    const resize = useResize()
    const [images, setImages] = useState([])

    useEffect(()=>{
        fetch(`${BASE_URL}/carousel/`)
        .then(res => res.json())
        .then(result => setImages(result[0].url))
    },[])
  return (
    <div className='carousel'>
        <Carousel fade>
        {
            images.map(slider => (
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