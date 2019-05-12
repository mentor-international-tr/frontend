import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import SearchBox from "./SearchBox";
import "jest-dom/extend-expect";

afterEach(cleanup);
describe("test <SearchBox />", () => {
  it("creates snapshots", () => {
      //snapshot of component without browser support for speech recognition
    const { asFragment, rerender } = render(
      <SearchBox
        setSearchText={() => {}}
        searchText={""}
        searchHandler={() => {}}
        onMicStartHandler={() => {}}
        onMicEndHandler={() => {}}
      />,
    );
    //snapshot of component with browser supporting speech recognition
    expect(asFragment()).toMatchSnapshot();
    rerender(
        <SearchBox
          setSearchText={() => {}}
          searchText={""}
          searchHandler={() => {}}
          onMicStartHandler={() => {}}
          onMicEndHandler={() => {}}
          browserSupportsSpeechRecognition={true}
        />,
      );
      expect(asFragment()).toMatchSnapshot();
      //TODO - add a snapshot when isMicOn is true and browserSupport is true
  });

  it("tests the value of the input search box", () => {
    const { getByTestId, rerender } = render(
      <SearchBox
        setSearchText={() => {}}
        searchText={""}
        searchHandler={() => {}}
        onMicStartHandler={() => {}}
        onMicEndHandler={() => {}}
      />,
    );
    expect(
    (getByTestId("search-box").querySelector("input") as HTMLInputElement)
        .value,
    ).toBe("");

    rerender(<SearchBox
        setSearchText={() => {}}
        searchText={"abc"}
        searchHandler={() => {}}
        onMicStartHandler={() => {}}
        onMicEndHandler={() => {}}
      />)
      expect(
        (getByTestId("search-box").querySelector("input") as HTMLInputElement)
            .value,
        ).toBe("abc");
  });

  it("when search button has been clicked on, it executes the searchHandler once", () => {
    const searchHandler = jest.fn();
    const { getByTestId } = render(<SearchBox
        setSearchText={() => {}}
        searchText={""}
        searchHandler={searchHandler}
        onMicStartHandler={() => {}}
        onMicEndHandler={() => {}}
      />,)

      fireEvent.click(getByTestId("search-icon-button"));
      expect(searchHandler).toHaveBeenCalledTimes(1);
  });
  it("when microphone button has been clicked on once, onMicStartHandler should be called once", () => {
    const startMicHandler = jest.fn();
    const { getByTestId } = render(<SearchBox
        setSearchText={() => {}}
        searchText={""}
        searchHandler={() => {}}
        onMicStartHandler={startMicHandler}
        onMicEndHandler={() => {}}
        browserSupportsSpeechRecognition={true}
      />,)

      fireEvent.click(getByTestId("mic-icon-button"));
      expect(startMicHandler).toHaveBeenCalledTimes(1);
  });
//   it("when microphone button has been clicked twice, onMicStartHandler and onMicEndHandler should be called once", () => {
//     const startMicHandler = jest.fn();
//     const endMicHandler = jest.fn();
//     const { getByTestId } = render(<SearchBox
//         setSearchText={() => {}}
//         searchText={""}
//         searchHandler={() => {}}
//         onMicStartHandler={startMicHandler}
//         onMicEndHandler={() => endMicHandler
//       />,)

//       fireEvent.click(getByTestId("mic-icon-button"));
//       expect(startMicHandler).toHaveBeenCalledTimes(1);
//   });
});
