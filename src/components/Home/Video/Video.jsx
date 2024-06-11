import React, { useContext } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'

const Video = () => {
    const video = 'https://ik.imagekit.io/tyjl9e59h/showreel_2024%20(1).mp4?updatedAt=1717945367133'
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
      />
     
    </div>
    )
}

export default Video

