import "./navbar.scss";
import React, { useState } from "react";
import TextButton from "components/TextButton/TextButton";

interface NavItem {
  text: string;
  icon?: React.ReactElement;
}
export interface NavbarProps {
  navItems: NavItem[];
  setText: Function;
  className?: string;
}

const Navbar: React.SFC<NavbarProps> = ({
  navItems,
  setText,
  className,
}) => {
  const [activeItemText, setActiveItemText] = useState(
    navItems[0].text,
  );
  return (
    <nav className={`mi-navbar ${className}`}>
      <ul
        className="mi-navbar__list"
        onClick={(e: any) => {
          const text = e.target.dataset["navItem"];
          if (text) {
            setText(text);
            setActiveItemText(text);
          }
        }}
      >
        {navItems.map((item: NavItem) => {
          return (
            <li
              key={item.text}
              className="mi-navbar__list-item"
            >
              <TextButton
                btnProps={{
                  color: `${
                    activeItemText === item.text
                      ? "primary"
                      : "default"
                  }`,
                  "data-nav-item": item.text,
                }}
              >
                <span data-nav-item={item.text}>
                  {item.text}
                </span>
              </TextButton>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
