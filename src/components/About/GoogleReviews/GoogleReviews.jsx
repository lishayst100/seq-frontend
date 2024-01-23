import React from "react";

import "../About.css";
import Stars from "./Stars";
import Review from "./Review";
const GoogleReviews = () => {
  return (
    <div className="container mx-auto  d-flex justify-content-between align-items-center review-container ">
      <Review />
      <Stars />
    </div>
  );
};

export default GoogleReviews;
