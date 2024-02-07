import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BASE_URL } from "../../../utils/utils";

const Text = () => {


    const [textAbout, setTextAbout] = useState([])
  
    useEffect(()=>{
      fetch(`${BASE_URL}/text`)
      .then(res => res.json())
      .then(result => setTextAbout(result))
      .catch(err => console.log(err))
    },[])

  return (
    <div className="d-flex flex-column justify-content-around">


      {
        textAbout.map(text => (
      <div key={text._id}>
        <p className="text-black text-start text-about">
        {text.text}
        </p>
      </div>
        ))
      }
      
      

     

      <div className={"align-self-start  text-start text-about"}>
        <NavLink
          to="/contact"
          className={
            "color-blue text-decoration-none hover-underline-animation text-bolder"
          }
        >
          Let's create together...
        </NavLink>
      </div>
    </div>
  );
};

export default Text;
