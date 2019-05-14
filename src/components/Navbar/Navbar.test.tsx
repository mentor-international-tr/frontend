import React from "react";
import { render, cleanup } from "react-testing-library";
import Navbar from "./Navbar";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("testing <Navbar /> component", () => {
  it("creates snapshot", () => {
    const { asFragment, rerender } = render(
      <Navbar setText={() => {}}navItems= {[{ text: "Messages"}, {text: "Templates"}]}/>
    );
    expect(asFragment()).toMatchSnapshot();
    })
})
