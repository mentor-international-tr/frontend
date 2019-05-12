import React from "react";
import { render, cleanup } from "react-testing-library";
import SelectionCard from "./SelectionCard";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("testing <SelectionCard /> component", () => {
  it("creates snapshot", () => {
    const { asFragment, rerender } = render(
      <SelectionCard
        description={"some description"}
        extraInfo={"some info"}
        iconElement={
          <i className="fas fa-chalkboard-teacher" />
        }
      >
        I am text
      </SelectionCard>,
    );
    expect(asFragment()).toMatchSnapshot();

    rerender(
      <SelectionCard
        description={"some description"}
        iconElement={
          <i className="fas fa-chalkboard-teacher" />
        }
      >
        I am text
      </SelectionCard>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
