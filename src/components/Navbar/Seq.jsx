import { useRef } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png'


const Navbar = () => {
  const navRef = useRef(null);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <nav className="navbar-logo bg-danger">
          <ul className="text-white d-flex  p-3 w-100 justify-content-end  bg-primary gap-3" style={{listStyle:'none'}}>
            <li className="flex-grow-1 bg-success d-flex justify-content-start">
              <a href="#" className="bg-secondary">

              <img src={logo} alt="" style={{width:'12rem' , objectFit:'cover'}} />


              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">About</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">Projects</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">Contact</a>
            </li>
          </ul>
    </nav>
  );
};

export default Navbar;