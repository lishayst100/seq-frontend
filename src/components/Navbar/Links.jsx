import { useState } from "react";
import { LINKS } from "./navLinks";
import { NavLink } from "react-router-dom";
import { FaVimeoV, FaInstagram, FaFacebookF } from "react-icons/fa";


const Links = () => {
  const [selected, setSelected] = useState(null);

  const toggleSelected = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };


  return (
    <div className="links-social ">
      {LINKS.map((link, index) => (
        <NavLink
        
          key={index}
          className={selected === index ? "selected link-navbar" : "link-navbar"}
          to={link.link}
          onClick={() => {
            toggleSelected(index);
          }}
        >
          {link.label}
        </NavLink>
      ))}
      <a href="https://www.instagram.com/dvir.aviram.seq" target="_blank" rel="noreferrer" 
       >
        <FaInstagram className="link link-social" 
        
        />
      </a>
      <a
        href="https://www.facebook.com/dvir.aviram.seq"
        target="_blank"
        rel="noreferrer"
       
      >
        <FaFacebookF className="link link-social" />
      </a>
      <a href="https://vimeo.com/dviraviram" target="_blank" rel="noreferrer">
        <FaVimeoV className="link link-social"  />
      </a>
      
    </div>
  );
};

export default Links;
