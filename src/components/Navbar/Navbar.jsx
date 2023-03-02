import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Navbar.css';
import About from './../../Routes/About';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#e9e4f0' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo'>
              Buta<span>nax</span>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/services'
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/contact'
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
