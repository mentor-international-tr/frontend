import "./main-content.scss";
import React, { useState } from "react";
import Navbar from "components/Navbar/Navbar";
import { Avatar, Divider } from "@material-ui/core";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";

export interface MainContentProps {}

const MainContent: React.SFC<MainContentProps> = () => {
  const MESSAGES = "Messages";
  const TEMPLATES = "Templates";
  const PEOPLE = "People";
  const [activeNavText, setActiveNavText] = useState(
    MESSAGES,
  );
  console.log(activeNavText);
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
    </div>
  );
};

export default MainContent;
