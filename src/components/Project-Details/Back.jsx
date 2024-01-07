import React from 'react'
import { useNavigate } from 'react-router-dom';

const Back = () => {
    const navigate = useNavigate(); 
  return (
    <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
  )
}

export default Back