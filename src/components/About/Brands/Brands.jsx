import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../lottie/logos.json";
import animationDataMobile from "../../../lottie/logo_horizontal.json";
import { useResize } from "../../../hooks/useResize";

const Brands = () => {
  const isMobile = useResize();
  return (
    <>
      {isMobile >= 1000 ? 
      <Lottie animationData={animationData} style={{ width: isMobile > 1400 ? '100%' : '170%' }} />
        : <Lottie animationData={animationDataMobile} style={{ width: "130%" }}/> 
    }
    </>
  );
};

export default Brands;
