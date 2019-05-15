import { Paper, InputBase } from "./SearchBoxStyles";
import React from "react";
import { IconButton } from "@material-ui/core";

import SpeechRecognition from "react-speech-recognition";
import { useState } from "react";
export interface SearchBoxProps {
  setSearchText: Function;
  searchText: Function;
  searchHandler: Function;
  onMicStartHandler?: Function;
  onMicEndHandler?: Function;
  startListening: Function;
  abortListening: Function;
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
  abortListening,
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
}) => {
  // console.log(transcript);
  const [isMicOn, setIsMicOn] = useState(false);
  return (
    <Paper elevation={1} isMicOn={isMicOn}>
      <IconButton
        aria-label="Search"
        data-testid="search-icon-button"
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
        data-testid="search-box"
        value={isMicOn ? transcript : searchText}
        onChange={(e: any) => {
          if (isMicOn) {
            setSearchText(transcript);
          } else {
            setSearchText(e.target.value);
          }
        }}
        onKeyDown={(e: any) => {
          if (e.keyCode === 13) {
            searchHandler();
          }
        }}
      />
      {browserSupportsSpeechRecognition && !isMicOn ? (
        <IconButton
          aria-label="Search By Microphone"
          data-testid="mic-icon-button"
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
          data-testid="x-icon-button"
          onClick={() => {
            if (onMicEndHandler) {
              onMicEndHandler();
            }
            abortListening();
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
