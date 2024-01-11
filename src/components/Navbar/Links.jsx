import { useState } from "react";
import { LINKS } from "./navLinks";
import { NavLink } from "react-router-dom";
import { FaVimeoV, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = () => {
  const [selected, setSelected] = useState(null);

  const toggleSelected = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };


  const [hovered, setHovered] = useState(false);

  const iconStyle = {
    color: hovered ? '#877817' : '#915315',
    transition: 'color 0.3s ease-in-out',
  };

  return (
    <div className="links-social">
      {LINKS.map((link, index) => (
        <NavLink
          key={index}
          className={selected === index ? "selected link" : "link"}
          to={link.link}
          onClick={() => {
            toggleSelected(index);
          }}
        >
          {link.label}
        </NavLink>
      ))}
      <a href="https://www.instagram.com/dvir.aviram.seq" target="_blank" rel="noreferrer" style={iconStyle} onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <FaInstagram className="link" style={iconStyle}
        
        />
      </a>
      <a
        href="https://www.facebook.com/dvir.aviram.seq"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF className="link" />
      </a>
      <a href="https://vimeo.com/dviraviram" target="_blank" rel="noreferrer">
        <FaVimeoV className="link icons"  />
      </a>
      
    </div>
  );
};

export default Links;
