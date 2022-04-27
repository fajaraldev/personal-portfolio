import React from 'react'
import { FiMoon } from 'react-icons/fi';
import { MenuNav } from '../index';

import './Navbar.scss';

function Navbar() {
  return (
    <header>
      <nav>
        <a className='nav__logo' href="#">FajaralDev</a>
        <MenuNav/>
        <FiMoon className='nav__change-theme'/>
      </nav>
    </header>
  )
}

export default Navbar;
