import React, { forwardRef } from 'react';


const Video = forwardRef((props, ref) => {
    const video = 'https://ik.imagekit.io/tyjl9e59h/showreel_2024%20(1).mp4?updatedAt=1717945367133';
    
    return (
        <div className='video-container' id='reel'>
            <video
                ref={ref}
                className='video'
                src={video}
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
