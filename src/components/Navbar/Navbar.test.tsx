import React from "react";
import { render, cleanup } from "react-testing-library";
import Navbar from "./Navbar";
import "jest-dom/extend-expect";
import TextButton from "components/TextButton/TextButton";

afterEach(cleanup);

describe("testing <Navbar /> component", () => {
  it("creates snapshot", () => {
    const { asFragment, rerender } = render(
      <Navbar>
          <TextButton>Message</TextButton>
          <TextButton>Templates</TextButton>
          <TextButton>People</TextButton>
      </Navbar>,
    );
    expect(asFragment()).toMatchSnapshot();
    })
})
