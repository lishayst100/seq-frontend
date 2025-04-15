import React, { forwardRef, useContext, useEffect } from 'react';
import { ProjectContext } from '../../../context/ProjectContext';


const Video = forwardRef((props, ref) => {

    const {showreel} = useContext(ProjectContext)
    const video = 'https://ik.imagekit.io/dvirseq10/Showreel%202025_Low%20quality._02mp4.mp4?updatedAt=1742495430399';
    
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
            <source src={video} type="video/mp4" />
        </div>
    );
});

export default Video;
