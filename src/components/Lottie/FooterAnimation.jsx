import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../../lottie/footer.json'; // Replace with your Lottie animation data

const LottieAnimation = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1 // Adjust this threshold based on when you want the animation to trigger
    };

    const playLottieAnimation = () => {
      if (targetRef.current) {
        setTimeout(() => {
          lottie.loadAnimation({
            container: targetRef.current,
            animationData: animationData, // Replace with your animation data
            loop: false,
            autoplay: true
          });
        }, 300); // Delay of 0.5 seconds (500 milliseconds)
      }
    };

    const intersectionCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          playLottieAnimation();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
  <div className='' style={{height:'500px'}}>
      <div ref={targetRef} className='d-flex justify-content-end align-items-end' style={{width:'100%' , height:"100%"}}></div>
     
  </div>
  );
};

export default LottieAnimation;
