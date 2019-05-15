import "./message-section.scss";
import React, { useState } from "react";
import SearchBox from "components/SearchBox/SearchBox";
import {
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
export interface MessageSectionProps {}

const MessageSection: React.SFC<MessageSectionProps> = () => {
  const [searchText, setSearchText] = useState("");
  const [chatMsg, setChatMsg] = useState("");
  return (
    <section className="message-section">
      <section className="recent-messages">
        <SearchBox
          searchText={searchText}
          setSearchText={setSearchText}
          searchHandler={() => {}}
          placeholder="Search for people to message"
          placeholderWhileMicOn="Tell me the person you want to message."
        />
        <h2>Recently Sent</h2>
        <Divider />
      </section>
      <section className="chat">
        <List className="chat__box">
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Simon Davis">SD</Avatar>
            </ListItemAvatar>
            <ListItemText primary="What's up?" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Derrick Mei">DM</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Just working at the restaurant." />
          </ListItem>
        </List>
        <form className="chat-msg-form">
          <SearchBox
            searchText={chatMsg}
            setSearchText={setChatMsg}
            searchHandler={() => {}}
            placeholder={`Message Everyone in Training Cohort #1`}
            placeholderWhileMicOn="Start speaking your chat message!"
          />
          <Button
            color="primary"
            variant="contained"
            className="chat-footer__send-btn"
            type="submit"
          >
            Send
          </Button>
        </form>
      </section>
    </section>
  );
};

export default MessageSection;
