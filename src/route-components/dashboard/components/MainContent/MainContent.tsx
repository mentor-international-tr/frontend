import "./main-content.scss";
import React, { useState } from "react";
import {
  Avatar,
  Divider,
  Button,
  IconButton,
  Tab,
  Tabs,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import MessageSection from "../MessageSection/MessageSection";

export interface MainContentProps {
  setIsSidebarOpen: Function;
}

const MainContent: React.SFC<MainContentProps> = ({
  setIsSidebarOpen,
}) => {
  const tabs: any = {
    0: "Messages",
    1: "Schedules",
    2: "People",
  };
  const [activeNavValue, setActiveNavValue] = useState(0);
  const activeValChange = (event: any, value: number) => {
    setActiveNavValue(value);
  };
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
          <Button
            variant="outlined"
            color="primary"
            className="dashboard-header__btn-contacts"
          >
            Add Contacts
          </Button>
          <IconButton
            className="dashboard-header__btn-settings"
            aria-label="Go to Settings"
          >
            <i className="fas fa-cog" />
          </IconButton>
        </div>
      </header>
      <Tabs
        className="dashboard-nav"
        value={activeNavValue}
        textColor="primary"
        indicatorColor="primary"
        onChange={activeValChange}
      >
        <Tab label={tabs[0]} />
        <Tab label={tabs[1]} />
        <Tab label={tabs[2]} />
      </Tabs>

      <Divider />
      <main className="dashboard-main">
        {tabs[0] === tabs[activeNavValue] ? (
          <MessageSection />
        ) : null}
        {/* {activeNavText === TEMPLATES ? <TemplatesSection /> : null}
        {activeNavText === PEOPLE ? <PeopleSection /> : null} */}
      </main>

      <footer className="dashboard-footer">
        <BottomNavigation
          onChange={activeValChange}
          value={activeNavValue}
          showLabels
        >
          <BottomNavigationAction
            label={tabs[0]}
            icon={<i className="fas fa-envelope" />}
          />
          <BottomNavigationAction
            label={tabs[1]}
            icon={<i className="fas fa-columns" />}
          />
          <BottomNavigationAction
            label={tabs[2]}
            icon={<i className="fas fa-users" />}
          />
        </BottomNavigation>
        <Button
          variant="contained"
          className="dashboard-footer__open-sidebar-btn"
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          Open Sidebar
        </Button>
      </footer>
    </div>
  );
};

export default MainContent;
