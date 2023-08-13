import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import '../css/Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav'>
          <div className='logo'>
            <h2>ultra</h2>
          </div>

          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className='fa'/>
          </div>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><NavLink activeclassname="active" to='/'>home</NavLink></li>
            <li><NavLink activeclassname="active" to='/work'>work</NavLink></li>
            <li><NavLink activeclassname="active" to='/portfolio'>portfolio</NavLink></li>
            <li><NavLink activeclassname="active" to='/profile'>resume</NavLink></li>
            <li><NavLink activeclassname="active" to='/about'>about</NavLink></li>
            <li><NavLink activeclassname="active" to='/contact'>contact</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
