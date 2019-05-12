import "./search-box.scss";
import React from "react";
import {
  Paper,
  IconButton,
  InputBase,
} from "@material-ui/core";

export interface SearchBoxProps {
  setSearchText: Function;
  searchHandler: Function;
  microphoneHandler: Function;
}

const SearchBox: React.SFC<SearchBoxProps> = ({
  setSearchText,
  searchHandler,
  microphoneHandler,
}) => {
  return (
    <Paper elevation={1} className="search-container">
      <IconButton
        aria-label="Search"
        onClick={() => {
          searchHandler();
        }}
      >
        <i className="fas fa-search" />
      </IconButton>
      <InputBase
        placeholder="Enter Organization Name"
        className="search-container__search-box"
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            searchHandler();
          }
        }}
      />
      <IconButton
        aria-label="Search By Microphone"
        onClick={() => {
          microphoneHandler();
        }}
      >
        <i className="fas fa-microphone" />
      </IconButton>
    </Paper>
  );
};

export default SearchBox;
