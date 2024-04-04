import React, { useState } from 'react'
import { convertBaseImg, convertSrcImg } from '../../utils/utils'

const OptimizedImg = ({img, alt}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
    const base_img = convertBaseImg(img)
    const src_img =  convertSrcImg(img)
  return (
    <img
          src={`${base_img}tr:w-800,f-auto/${src_img}`}
          srcSet={`${base_img}tr:w-400,f-auto/${src_img} 400w ,${base_img}tr:w-800,f-auto/${src_img} 800w, ${base_img}tr:w-1200,f-auto/${src_img} 1200w`}
          alt={alt}
          onError={({currentTarget})=>{
            currentTarget.src = `${base_img}tr:w-800,f-png/${src_img}`
            currentTarget.onerror = null
          }}
          loading="lazy"
          className={`image-project ${imageLoaded ? "loaded" : ""}`}
          onLoad={handleImageLoad}
        />
  )
}

export default OptimizedImg