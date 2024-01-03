import React from 'react'

const Video = () => {
    const video = 'https://res.cloudinary.com/dabvgy03h/video/upload/v1704022256/g5j9ucuyql3jhm8uid9z.mp4'
  return (
    <div className='video-container'>
      <video
        className='video'
        src={video}
        controls={false}
        muted
        autoPlay
        loop
       
      />
    </div>
    )
}

export default Video

