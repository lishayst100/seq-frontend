import React from 'react'

const Review = () => {
  const link = 'https://www.google.com/search?q=sequence+studio&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCEC4YJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQoyMjYxNTJqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8'
  return (
    <div className='text-black d-flex flex-column text-lg-start text-md-start text-center review-titles-container'>
      <h4>Sequence</h4>
      <h3 className='text-bolder'>Google 9 Reviews</h3>
      <a href={link} className='color-blue text-decoration-none hover-underline-animation text-bolder'>write a review</a>
      </div>
  )
}

export default Review