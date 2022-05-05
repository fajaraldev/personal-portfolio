import React from "react";
import {
  BiHomeAlt,
  BiUser,
  BiBook,
  BiBriefcase,
  BiPhone
} from "react-icons/bi";

import "./NavMenu.scss";

const dataMenus = [
  {
    link: "#home",
    Icon: <BiHomeAlt />
  },
  {
    link: "#about",
    Icon: <BiUser />
  },
  {
    link: "#skills",
    Icon: <BiBook />
  },
  {
    link: "#work",
    Icon: <BiBriefcase />
  },
  {
    link: "#contact",
    Icon: <BiPhone />
  },
]

function NavMenu() {
  const [menus, setMenus] = React.useState([]);
  const [active, setActive] = React.useState("#home");

  React.useEffect(() => {
    setMenus(dataMenus);
  }, []);

  return (
    <div className="nav__menu">
      <ul>
        {menus.map((menu, index) => (
          <li key={index}>
            <a
              href={menu.link}
              className={menu.link === active ? "active-link" : ""}
              onClick={() => setActive(menu.link)}
            >
              { menu.Icon }
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavMenu
