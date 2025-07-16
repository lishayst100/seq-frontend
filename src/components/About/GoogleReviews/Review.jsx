import React from 'react'

const Review = () => {
  const link = 'https://g.page/r/CSuVtSwRPCsBEBM/review'
  return (
    <section 
      className='text-black d-flex flex-column text-lg-start text-md-start text-center review-titles-container' 
      aria-labelledby="review-title review-subtitle"
    >
      <h4 id="review-title">Sequence</h4>
      <h3 id="review-subtitle" className='fw-bold'>Google 11 Reviews</h3>
      <a 
        href={link} 
        className='color-blue text-decoration-none hover-underline-animation fw-bold' 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="כתוב ביקורת ב-Google על Sequence"
      >
        Write a review
      </a>
    </section>
  )
}

export default Review
