import React from "react";
import { render, cleanup } from "react-testing-library";
import PrimaryButton from "./PrimaryButton";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("testing <PrimaryButton /> component", () => {
  it("creates snapshot", () => {
    const { asFragment } = render(
      <PrimaryButton>I am text</PrimaryButton>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("inserts text as a child of the button", () => {
    const { getByTestId } = render(
      <PrimaryButton>test</PrimaryButton>,
    );
    expect(getByTestId("primary-button")).toHaveTextContent(
      "test",
    );
  });
});
