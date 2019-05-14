import "./main-content.scss";
import React, { useState } from "react";
import Navbar from "components/Navbar/Navbar";
import { Avatar, Divider } from "@material-ui/core";
import MIBottomNavigation from "components/MIBottomNavigation/MIBottomNavigation";

export interface MainContentProps {
  setIsSidebarOpen: Function;
}

const MainContent: React.SFC<MainContentProps> = ({
  setIsSidebarOpen,
}) => {
  const MESSAGES = "Messages";
  const TEMPLATES = "Templates";
  const PEOPLE = "People";
  const [activeNavText, setActiveNavText] = useState(
    MESSAGES,
  );
  return (
    <div className="dashboard-main-content">
      <header className="dashboard-header">
        <Avatar className="dashboard-header__avatar">
          s
        </Avatar>
        <div className="dashboard-header__text-content">
          <h2>Training Cohort #1</h2>
          <p>@peru1</p>
        </div>
        <div className="dashboard-header__buttons">
          <button className="dashboard-header__btn-contacts">
            Add Contacts
          </button>
          <button className="dashboard-header__btn-settings">
            <i className="fas fa-cog" />
          </button>
        </div>
      </header>
      <Navbar
        className="dashboard-nav"
        setText={setActiveNavText}
        navItems={[
          {
            text: MESSAGES,
          },
          {
            text: TEMPLATES,
          },
          {
            text: PEOPLE,
          },
        ]}
      />
      <Divider />
      <main />
      <footer className="dashboard-footer">
        <MIBottomNavigation
          className="dashboard-footer__mobile-nav"
          navItems={[
            {
              label: "Sidebar",
              icon: <i className="fas fa-bars" />,
              clickHandler: () => {
                setIsSidebarOpen(true);
              },
            },
            {
              label: MESSAGES,
              icon: <i className="fas fa-envelope" />,
              clickHandler: () => {
                setActiveNavText(MESSAGES);
              },
            },
            {
              label: TEMPLATES,
              icon: <i className="fas fa-columns" />,
              clickHandler: () => {
                setActiveNavText(TEMPLATES);
              },
            },
            {
              label: PEOPLE,
              icon: <i className="fas fa-users" />,
              clickHandler: () => {
                setActiveNavText(PEOPLE);
              },
            },
          ]}
        />
      </footer>
    </div>
  );
};

export default MainContent;
