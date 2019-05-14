import "./navbar.scss";
import React, { useState } from "react";
import uuidv4 from "uuid/v4";
import TextButton from "components/TextButton/TextButton";

interface NavItem {
  text: string;
  icon?: React.ReactElement;
}
export interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.SFC<NavbarProps> = ({ navItems }) => {
  const [activeItem, setActiveItem] = useState("0");
  return (
    <nav className="mi-navbar">
      <ul
        className="mi-navbar__list"
        onClick={(e: any) => {
          if (e.target.dataset["navItem"]) {
            setActiveItem(e.target.dataset["navItem"]);
          }
        }}
      >
        {navItems.map((item: NavItem, i: number) => {
          return (
            <li
              key={uuidv4()}
              className="mi-navbar__list-item"
            >
              <TextButton
                btnProps={{
                  color: `${
                    activeItem === `${i}`
                      ? "primary"
                      : "default"
                  }`,
                  "data-nav-item": i,
                }}
              >
                <span data-nav-item={i}>{item.text}</span>
              </TextButton>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
