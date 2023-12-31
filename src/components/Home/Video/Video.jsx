import React from 'react'

const Video = () => {
    const video = 'https://res.cloudinary.com/dabvgy03h/video/upload/v1704022256/g5j9ucuyql3jhm8uid9z.mp4'
  return (
    <div style={{ width: '100%', height: '700px',zIndex:100 }}>
      <video
        src={video}
        controls={false}
        muted
        autoPlay
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
    )
}

export default Video

