import React from 'react';
import { BiHomeAlt, BiUser, BiBook, BiBriefcase, BiMessageAlt } from 'react-icons/bi';

import './MenuNav.scss';

function MenuNav() {
  return (
    <div className="nav__menu">
      <ul>
        <li>
          <a className='active-link' href="#home">
            <BiHomeAlt/>
          </a>
        </li>
        <li>
          <a href="#about">
            <BiUser/>
          </a>
        </li>
        <li>
          <a href="#skills">
            <BiBook/>
          </a>
        </li>
        <li>
          <a href="#works">
            <BiBriefcase/>
          </a>
        </li>
        <li>
          <a href="#contact">
            <BiMessageAlt/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuNav
