import "./search-box.scss";
import React from "react";
import {
  Paper,
  IconButton,
  InputBase,
} from "@material-ui/core";
import SpeechRecognition from "react-speech-recognition";
import { useState } from "react";
export interface SearchBoxProps {
  setSearchText: Function;
  searchText: Function;
  searchHandler: Function;
  onMicStartHandler?: Function;
  onMicEndHandler?: Function;
  startListening: Function;
  stopListening: Function;
  transcript: string;
  resetTranscript: Function;
  browserSupportsSpeechRecognition: boolean;
}

const SearchBox: React.SFC<SearchBoxProps> = ({
  setSearchText,
  searchText,
  searchHandler,
  onMicStartHandler,
  onMicEndHandler,
  startListening,
  stopListening,
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
}) => {
  // console.log(transcript);
  const [isMicOn, setIsMicOn] = useState(false);
  return (
    <Paper
      elevation={1}
      className={`search-container ${
        isMicOn ? "search-container__mic--on" : ""
      }`}
    >
      <IconButton
        aria-label="Search"
        onClick={() => {
          searchHandler();
        }}
      >
        <i className="fas fa-search" />
      </IconButton>
      <InputBase
        placeholder={`${
          isMicOn
            ? "Tell me your Organization Name"
            : "Enter Organization Name"
        }`}
        className="search-container__search-box"
        value={isMicOn ? transcript : searchText}
        onChange={e => {
          if (isMicOn) {
            setSearchText(transcript);
          } else {
            setSearchText(e.target.value);
          }
        }}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            searchHandler();
          }
        }}
      />
      {browserSupportsSpeechRecognition && !isMicOn ? (
        <IconButton
          aria-label="Search By Microphone"
          onClick={() => {
            if (onMicStartHandler) {
              onMicStartHandler();
            }
            startListening();
            setIsMicOn(true);
            resetTranscript();
          }}
        >
          <i className="fas fa-microphone" />
        </IconButton>
      ) : null}
      {browserSupportsSpeechRecognition && isMicOn ? (
        <IconButton
          aria-label="Clear search box and exit microphone mode"
          onClick={() => {
            if (onMicEndHandler) {
              onMicEndHandler();
            }
            stopListening();
            setIsMicOn(false);
            resetTranscript();
          }}
        >
          <i className="fas fa-times" />
        </IconButton>
      ) : null}
    </Paper>
  );
};

export default SpeechRecognition({ autoStart: false })(
  SearchBox,
);
