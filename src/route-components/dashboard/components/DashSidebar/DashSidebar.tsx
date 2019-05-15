import "./dash-sidebar.scss";
import React from "react";
import {
  Paper,
  Divider,
  Avatar,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import MIBottomNavigation from "components/MIBottomNavigation/MIBottomNavigation";

export interface DashSidebarProps {
  isOpen?: boolean;
  setIsOpen: Function;
}

const DashSidebar: React.SFC<DashSidebarProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Paper
      square
      elevation={2}
      className={`dash-sidebar ${
        isOpen
          ? `dash-sidebar--open`
          : `dash-sidebar--close`
      }`}
    >
      {/* TODO: GET Name data for avatar initials */}
      <header className="dash-sidebar__header">
        <Avatar className="sidebar-header__avatar">
          S
        </Avatar>

        <div className="dash-sidebar-header__text-content">
          <p>Hello,</p>
          {/* TODO: GET Name data to replace Simon */}
          <h2>Simon</h2>
        </div>
      </header>
      <Divider />
      <section className="dash-sidebar__content">
        <List
          className="content__list"
          component="ul"
          subheader={
            <ListSubheader component="div">
              Organization
            </ListSubheader>
          }
        >
          <ListItem>
            {/* TODO: Replace Organization Name with GET data */}
            <ListItemText
              inset
              primary="Organization Name"
            />
          </ListItem>
        </List>
        <List
          component="ul"
          subheader={
            <ListSubheader component="div">
              Groups
            </ListSubheader>
          }
        >
          <ListItem button>
            <ListItemIcon>
              <i className="fas fa-plus-circle" />
            </ListItemIcon>
            <ListItemText inset primary="Create a group" />
          </ListItem>
          {/* TODO: Fetch Groups belonging to this organization */}
        </List>
        <List
          component="ul"
          subheader={
            <ListSubheader component="div">
              Conversations
            </ListSubheader>
          }
        >
          <ListItem button>
            <ListItemIcon>
              <i className="fas fa-plus-circle" />
            </ListItemIcon>
            <ListItemText
              inset
              primary="Send message to a single person"
            />
          </ListItem>
          {/* TODO: Fetch Groups belonging to this organization */}
        </List>
      </section>
      <footer className="footer-sidebar">
        <MIBottomNavigation
          highlightNone
          navItems={[
            {
              label: "Add Contacts",
              icon: <i className="fas fa-address-book" />,
              clickHandler: () => {},
            },
            {
              label: "Settings",
              icon: <i className="fas fa-cog" />,
              clickHandler: () => {},
            },
          ]}
        />
        <Button
          onClick={() => {
            setIsOpen(false);
          }}
          className="footer-sidebar__close-btn"
          color="primary"
        >
          <i className="fas fa-arrow-left" />
          Close Sidebar
        </Button>
      </footer>
    </Paper>
  );
};

export default DashSidebar;
