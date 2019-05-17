import { MIPaper, MIInputBase } from "./SearchBoxStyles";
import React from "react";
import { IconButton } from "@material-ui/core";

import SpeechRecognition from "react-speech-recognition";
import { useState } from "react";
export interface SearchBoxProps {
  setSearchText: Function;
  searchText: Function;
  searchHandler: Function;
  placeholderWhileMicOn: string;
  placeholder: string;
  micAutoStart: boolean;
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
  placeholder,
  placeholderWhileMicOn,
  micAutoStart,
  startListening,
  abortListening,
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
}) => {
  // console.log(transcript);
  const [isMicOn, setIsMicOn] = useState(micAutoStart);

  return (
    <MIPaper
      elevation={1}
      ismicon={isMicOn ? "true" : "false"}
    >
      <IconButton
        aria-label="Search"
        data-testid="search-icon-button"
        onClick={() => {
          searchHandler();
        }}
      >
        <i className="fas fa-search" />
      </IconButton>
      <MIInputBase
        placeholder={`${
          isMicOn ? placeholderWhileMicOn : placeholder
        }`}
        className="search-container__search-box"
        data-testid="search-box"
        value={
          isMicOn
            ? `${searchText} ${transcript}`
            : searchText
        }
        onChange={(e: any) => {
          if (isMicOn) {
            setSearchText(`${searchText} ${transcript}`);
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
            setSearchText(`${searchText} ${transcript}`);
            abortListening();
            setIsMicOn(false);
            resetTranscript();
          }}
        >
          <i className="fas fa-times" />
        </IconButton>
      ) : null}
    </MIPaper>
  );
};
SearchBox.defaultProps = {
  micAutoStart: false,
  placeholder: "",
  placeholderWhileMicOn: "",
};
export default SpeechRecognition({ autoStart: false })(
  SearchBox,
);
