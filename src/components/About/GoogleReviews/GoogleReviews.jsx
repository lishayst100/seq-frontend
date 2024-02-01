import React from "react";
import Stars from "./Stars";
import Review from "./Review";
const GoogleReviews = () => {
  return (
    <div className="
    container mx-auto review-container
    d-flex 
    flex-column flex-lg-row flex-md-row
    justify-content-md-between justify-content-lg-between justify-content-center
    align-items-center 
    gap-1
    

    ">
      <Review />
      <Stars />
    </div>
  );
};

export default GoogleReviews;
