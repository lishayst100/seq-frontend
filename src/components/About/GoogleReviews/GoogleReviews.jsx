import React from "react";
import Stars from "./Stars";
import Review from "./Review";
const GoogleReviews = () => {
  return (
    <div className="
    container mx-auto review-container
    d-flex 
    flex-column flex-lg-row 
    justify-content-center justify-content-lg-between
    align-items-center 
    gap-4 gap-lg-1

    ">
      <Review />
      <Stars />
    </div>
  );
};

export default GoogleReviews;
