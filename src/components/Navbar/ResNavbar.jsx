import { useRef, useState } from "react";
import { FaBars, FaFacebookF, FaInstagram, FaTimes, FaVimeoV } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import './MainNavnar.scss'
import { LINKS } from "./navLinks";
import logo from '../../images/logo2.png'
import { useMotionValueEvent, useScroll,motion } from "framer-motion";
import { useDimensions } from "../Responsive Navbar/use-dimensions";



const Navbar = () => {
  const navRef = useRef(null);
  const nav = useNavigate()  
  


  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  const [hidden,setHidden] = useState(false)
    const {scrollY} = useScroll()
    useMotionValueEvent(scrollY,'change',(latest) => {
        const previous = scrollY.getPrevious()
        if( previous < latest){
            setHidden(true)
        }else{
            setHidden(false)
        }
    })

    const variants = {
        hidden: {
            y: '-110%',
            transition: {duration: 0.8 , ease: 'easeInOut'}
        },
        visible: {
            y: '0',
            transition: {duration: 0.8 , ease: 'easeInOut'}
        }
    }


  
 

 

  return (
    <motion.header className="navbar-logo d-flex justify-content-between" 
    style={{position:'fixed', width:'100%', zIndex:100}}
    variants={variants} 
    initial='visible'
    animate={hidden ? 'hidden' : 'visible'}
    
  
    >
      
        <img src={logo} alt="" style={{ height:'50%' } } onClick={()=>{nav('/')}} />
      <nav className="links" ref={navRef}>
        {LINKS.map((v) => (
          <NavLink className={"link-navbar"} key={v.link} to={v.link} onClick={showNavbar}>
            {v.label}
          </NavLink>
        ))}
        <div>
        <a href="https://www.instagram.com/dvir.aviram.seq" target="_blank" rel="noreferrer" 
       >
        <FaInstagram className="link-navbar link-social" 
        
        />
      </a>
      <a
        href="https://www.facebook.com/dvir.aviram.seq"
        target="_blank"
        rel="noreferrer"
       
      >
        <FaFacebookF className="link-navbar link-social" />
      </a>
      <a href="https://vimeo.com/dviraviram" target="_blank" rel="noreferrer">
        <FaVimeoV className="link-navbar link-social"  />
      </a>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </motion.header>
  );
};

export default Navbar;