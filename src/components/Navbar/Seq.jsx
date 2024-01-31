import { useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';
import { useScroll, useTransform, motion } from "framer-motion";
import { useDimensions } from "../Responsive Navbar/use-dimensions";

const Navbar = () => {
  const navRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const { width } = useDimensions(navRef);
  console.log(width);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };
  

  
  const initialScale = width ? width / 100 : 1;
  const scale = useTransform(scrollYProgress, [0, 0.1], [initialScale, 1]);

  return (
    <motion.nav className="d-flex align-items-start bg-danger w-100" style={{ height: '85vh', position: 'fixed' }} ref={navRef}>
      <ul className="text-white d-flex  p-3 w-100 justify-content-end  bg-primary gap-3" style={{ listStyle: 'none' }}>
        <li className="flex-grow-1 bg-success d-flex justify-content-start">
          <a href="#" className="bg-secondary">
            <motion.img
              src={logo}
              alt=""
              className="bg-secondary"
              style={{
                scale,
                width: '100%',
                maxWidth: '118px',
                height: 'auto',
                margin: 'auto', // Center the image horizontally
                display: 'block' // Remove any extra spacing around the image
              }}
            />
          </a>
        </li>
        <li>
          <a href="/about" className="text-decoration-none">About</a>
        </li>
        <li>
          <a href="#" className="text-decoration-none">Projects</a>
        </li>
        <li>
          <a href="#" className="text-decoration-none">Contact</a>
        </li>
      </ul>
      <motion.div className="bg-success" style={width}></motion.div>
    </motion.nav>
  );
};

export default Navbar;
