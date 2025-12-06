import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ProjectContext } from "../../../context/ProjectContext";

const Text = () => {
  const { getText, text } = useContext(ProjectContext);
  
  useEffect(()=>{
    getText()
  },[])

  return (
    <div
      className="d-flex flex-column justify-content-around"
      role="region"
      aria-label="About section"
    >
      {/* טקסטים דינאמיים */}
      {text.map((item) => (
        <div key={item._id}>
          <p className="text-black text-start text-about" tabIndex="0">
            {item.text}
          </p>
        </div>
      ))}

      {/* קישור ליצירת קשר */}
      <div className="align-self-start text-start text-about">
        <NavLink
          to="/contact"
          className="color-blue text-decoration-none hover-underline-animation text-bolder"
          aria-label="Go to contact page to start creating together"
        >
          Let's create together...
        </NavLink>
      </div>
    </div>
  );
};

export default Text;
