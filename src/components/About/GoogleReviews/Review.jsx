import React from 'react'

const Review = () => {
  const link = 'https://g.co/kgs/nsjrzKB/review'
  return (
    <div className='text-black d-flex flex-column text-lg-start text-md-start text-center review-titles-container'>
      <h4>Sequence</h4>
      <h3 className='text-bolder'>Google 9 Reviews</h3>
      <a href={link} className='color-blue text-decoration-none hover-underline-animation text-bolder'>write a review</a>
      </div>
  )
}

export default Review