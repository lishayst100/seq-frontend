import React, { useContext } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'

const Video = () => {
    const video = 'https://res.cloudinary.com/dabvgy03h/video/upload/v1704022256/g5j9ucuyql3jhm8uid9z.mp4'
    const {projects} = useContext(ProjectContext)
  return (
    <div className='video-container'>
      <video
        className='video'
        src={video}
        controls={false}
        muted
        autoPlay
        loop
        playsInline
        poster={projects[0]?.images[0]}
      />
     
    </div>
    )
}

export default Video

