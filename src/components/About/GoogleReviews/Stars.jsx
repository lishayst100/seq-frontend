import React from 'react'
import { BsStarFill } from "react-icons/bs";

const Stars = () => {
  return (
    <div 
      className='rating text-black d-flex gap-3 align-items-start justify-content-start align-items-lg-start align-items-center flex-lg-row flex-column'
      role="img"
      aria-label="דירוג חמישה כוכבים, ציון 5 מתוך 5"
    >
      <div aria-hidden="true">
        <BsStarFill className='star' />
        <BsStarFill className='star' />
        <BsStarFill className='star' />
        <BsStarFill className='star' />
        <BsStarFill className='star' />
      </div>
      <span className='color-blue'>5.0</span>
    </div>
  )
}

export default Stars
