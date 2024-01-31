import React from "react";
import Stars from "./Stars";
import Review from "./Review";
const GoogleReviews = () => {
  return (
    <div className="
    container mx-auto review-container
    d-flex 
    justify-content-between
    align-items-center 
    gap-1
    

    ">
      <Review />
      <Stars />
    </div>
  );
};

export default GoogleReviews;
