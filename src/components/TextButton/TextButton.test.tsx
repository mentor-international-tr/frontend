import React from "react";
import { render, cleanup } from "react-testing-library";
import TextButton from "./TextButton";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("testing <TextButton /> component", () => {
  it("creates snapshot", () => {
    const { asFragment, rerender } = render(
      <TextButton btnProps={{
          color: "primary"
      }}>Message</TextButton>,
    );
    expect(asFragment()).toMatchSnapshot();
    })
})
