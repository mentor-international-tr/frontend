import "./navbar.scss";
import React from "react";
import uuidv4 from "uuid/v4";
export interface NavbarProps {
  children: any;
}

const Navbar: React.SFC<NavbarProps> = ({ children }) => {
  return (
    <nav className="mi-navbar">
      <ul className="mi-navbar__list">
        {children.map((child: any) => {
          return (
            <li
              key={uuidv4()}
              className="mi-navbar__list-item"
            >
              {React.cloneElement(child)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
