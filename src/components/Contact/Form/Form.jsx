import React from 'react'

const Form = () => {
  return (
    <form className='container mx-auto d-flex flex-column gap-5 justify-content-start align-items-center form-container'>
        <div className='input-div d-flex gap-2 justify-content-start w-75 pb-2'>
            <label htmlFor="name" className='text-black'>Name*</label>
            <input type="text" className='text-black contact-input flex-grow-1' />
        </div>
        <div className='input-div d-flex gap-2 justify-content-start w-75 pb-2'>
            <label htmlFor="name" className='text-black'>Email*</label>
            <input type="text" className='text-black contact-input flex-grow-1' />
        </div>
        <div className='input-div d-flex gap-2 justify-content-start w-75 pb-2 mb-5'>
            <label htmlFor="name" className='text-black'>Your Message:</label>
            <input type="text" className='text-black contact-input flex-grow-1' />
        </div>

        <div className='w-75  d-flex justify-content-start'>
          <button type='submit' className='contact-btn'>Send</button>
        </div>
       
    </form>
  )
}

export default Form