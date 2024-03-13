import React, { useContext } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'

const Video = () => {
    const video = 'https://ik.imagekit.io/whwhqeu9s/showreel-vimeo-229678848-dash-google_mediacdn_sep-video-817a9014.mp4?updatedAt=1710345814131"'
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

