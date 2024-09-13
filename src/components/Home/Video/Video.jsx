import React, { forwardRef, useContext, useEffect } from 'react';
import { ProjectContext } from '../../../context/ProjectContext';


const Video = forwardRef((props, ref) => {

    const {showreel} = useContext(ProjectContext)
    const video = 'https://ik.imagekit.io/tyjl9e59h/showreel_2024%20(1).mp4?updatedAt=1717945367133';
    console.log(showreel[0])
    
    return (
        <div className='video-container' id='reel'>
            <video
                ref={ref}
                className='video'
                src={showreel[0]?.link}
                controls={false}
                muted
                autoPlay
                loop
                playsInline
            />
        </div>
    );
});

export default Video;
