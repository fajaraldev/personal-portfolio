import React from "react";
import { FiMoon } from "react-icons/fi";
import { NavMenu } from "../index";

import "./Navbar.scss";

function Navbar() {
  return (
    <header className="header" id="header">
      <nav className="nav__container container">
        <a className="nav__logo" href="#">FajaralDev</a>
        <NavMenu/>
        <FiMoon className="nav__change-theme"/>
      </nav>
    </header>
  )
}

export default Navbar;
