import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../utils/utils';

const SocialFooter = () => {
  return (
    <ul className='d-flex flex-column justify-content-between gap-2'>
      {links.slice(0, 3).map(link => (
        <li className='link' key={link.title}>
          <NavLink to={link.link} className='link'>{link.title}</NavLink>
        </li>
      ))}
      {links.slice(3, links.length).map(link => (
        <li className='link' key={link.link}>
          <a href={link.link} target='_blank' className='link' rel="noreferrer">{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default SocialFooter;
