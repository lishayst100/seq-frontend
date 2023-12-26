import React from 'react'
import { NavLink } from 'react-router-dom'

const SocialFooter = () => {
    const links = ['Projects','Reel','About','Instagram','Facebook','Vimeo','LinkedIn']
  return (
    <ul className='d-flex flex-column justify-content-between gap-2'>
        {links.map(link => (
            <li key={link} className='link'>
                <NavLink to={'/'} className='link'>{link}</NavLink>
            </li>
        ))}
    </ul>
  )
}

export default SocialFooter