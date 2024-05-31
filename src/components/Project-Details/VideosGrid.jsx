import React from 'react'

const VideosGrid = ({selectedProject}) => {
  return (
    <div className='images-grid container'>
        {
            selectedProject.supplementaryVideos?.map(v => (
                <video src={v} key={v} controls
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  className='rounded-3'
                ></video>
            ))
        }
    </div>
  )
}

export default VideosGrid