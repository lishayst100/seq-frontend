import  {useState} from 'react'
import { LINKS } from './navLinks'
import { NavLink } from 'react-router-dom'
import { FaVimeoV, FaInstagram, FaFacebookF } from 'react-icons/fa';


const Links = () => {
    const [selected, setSelected] = useState(null)

    const toggleSelected = (i) => {
        if (selected === i) {
          return setSelected(null);
        }
  
        setSelected(i);
      };


  return (
   
        <div className="links-social">
        {
          LINKS.map((link,index) => (
            <NavLink className= { selected === index ? 'selected link' : 'link'} to={link.link} onClick={()=>{toggleSelected(index)}}>{link.label}</NavLink>
          ))
        }
        <FaInstagram className="link" />
        <FaFacebookF className="link" />
        <FaVimeoV className="link" />
        
      </div>
        
   
  )
}

export default Links