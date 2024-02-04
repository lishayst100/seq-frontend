import { useRef, useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaVimeoV,
} from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./MainNavnar.scss";
import { LINKS } from "./navLinks";
import logo from "../../images/logo2.png";
import { useMotionValueEvent, useScroll, motion, MotionConfig } from "framer-motion";


const Navbar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  const nav = useNavigate();
  const { pathname } = useLocation();

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
    setIsOpen(prev => !prev)
  };

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous < latest) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const variants = {
    hidden: {
      y: "-110%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    visible: {
      y: "0",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.header
      className="navbar-logo d-flex justify-content-between "
      style={{ position: "fixed", width: "100%", zIndex: 100 }}
      variants={variants}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
    >
      <img
        src={logo}
        alt=""
        style={{
          visibility: pathname === '/' ? (scrollY.get() > 600 ? "visible" : "hidden") : 'visible',
          height: "50%",zIndex: 889
        }}
        onClick={() => {
          nav("/");
        }}
      />
      <nav className="links" ref={navRef}>
        {LINKS.map((v) => (
          <NavLink
            className={"link-navbar"}
            key={v.link}
            to={v.link}
            onClick={showNavbar}
          >
            {v.label}
          </NavLink>
        ))}
        <div>
          <a
            href="https://www.instagram.com/dvir.aviram.seq"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="link-navbar link-social" />
          </a>
          <a
            href="https://www.facebook.com/dvir.aviram.seq"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="link-navbar link-social" />
          </a>
          <a
            href="https://vimeo.com/dviraviram"
            target="_blank"
            rel="noreferrer"
          >
            <FaVimeoV className="link-navbar link-social" />
          </a>
        </div>
        
       
      </nav>
      <MotionConfig transition={{duration: 0.3, ease: 'easeInOut'}}>
      <motion.div className="nav-hamburger " onClick={showNavbar} animate={isOpen ? 'open' : 'close'} initial={false}>
        <motion.span className="line" style={{
          top: '35%',
          left: '50%',
          y: '-50%',
          x: '-50%'
        }}
          variants={{
            open: {
              rotate: ['0deg','0deg','45deg'],
              top: ['35%', '50%', '50%'],
            },
            close: {
              rotate: ['45deg','0deg','0deg'],
              top: ['50%', '50%', '35%'],
            },
          }}
        />
        <motion.span className="line" style={{
          top: '50%',
          left: '50%',
          y: '-50%',
          x: '-50%',
          
        }}
        variants={{
          open: {
            rotate: ['0deg','0deg','-45deg'],
            
          },
          close: {
            rotate: ['-45deg','0deg','0deg'],
            
          },
        }}
        
        />
        <motion.span className="line" style={{
          bottom: '30%',
          left: '50%',
          y: '-50%',
          x: '-50%'
        }}
        variants={{
          open: {
            rotate: ['0deg','0deg','45deg'],
            bottom: ['30%', '30%' , '45%']
            
          },
          close: {
            rotate: ['45deg','0deg','0deg'],
            bottom: ['45%','30%', '30%' ]
           
          },
        }}
        />
       
      </motion.div>
      </MotionConfig>
    </motion.header>
  );
};

export default Navbar;

//if scrollY is smaller then 600 then image is hidden and make sure that it is only work in the home page
