import "./main-sidebar.scss";
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
} from "@material-ui/core";

export interface MainSidebarProps {}

const MainSidebar: React.SFC<MainSidebarProps> = () => {
  return (
    <Paper square elevation={2} className="main-sidebar">
      {/* TODO: GET Name data for avatar initials */}
      <header className="main-sidebar__header">
        <Avatar className="sidebar-header__avatar">
          S
        </Avatar>

        <div className="sidebar-header__text-content">
          <p>Hello,</p>
          {/* TODO: GET Name data to replace Simon */}
          <h2>Simon</h2>
        </div>
      </header>
      <Divider />
      <section className="main-sidebar__content">
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
    </Paper>
  );
};

export default MainSidebar;
