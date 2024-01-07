import { useEffect, useState } from 'react'

export const useResize = () => {
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   useEffect(() => {
     function handleResize() {
       setScreenWidth(window.innerWidth);
     }
     // Add event listener for window resize
     window.addEventListener("resize", handleResize);

     // Clean up the event listener when the component unmounts
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);

   return screenWidth

}

