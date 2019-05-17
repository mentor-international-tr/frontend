import "./message-section.scss";
import React from "react";
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
export interface MessageSectionProps {
  msgState: {
    [key: string]: any;
  }
  msgDispatch: Function;
}

const MessageSection: React.SFC<MessageSectionProps> = ({ msgState, msgDispatch }) => {
  return (
    <section className="message-section">
      <section className="recent-messages">
        <SearchBox
          searchText={msgState.searchText}
          setSearchText={(text: string) => {
            msgDispatch({ type: "SET_TEXT", name: "searchText", text})
          }}

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
            searchText={msgState.chatText}
            setSearchText={(text: string) => {
              msgDispatch({ type: "SET_TEXT", name: "chatText", text })
            }}
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
