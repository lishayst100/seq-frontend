import React, { useContext} from "react";
import { NavLink } from "react-router-dom";

import { ProjectContext } from "../../../context/ProjectContext";

const Text = () => {

    const {text} = useContext(ProjectContext)
  
  
    

  return (
    <div className="d-flex flex-column justify-content-around">


      {
        text.map(text => (
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
