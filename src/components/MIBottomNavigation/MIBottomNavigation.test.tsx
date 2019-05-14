import React from "react";
import { render, cleanup } from "react-testing-library";
import MIBottomNavigation from "./MIBottomNavigation";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("testing <MIBottomNavigation /> component", () => {
  it("creates snapshot", () => {
    const { asFragment } = render(
      <MIBottomNavigation navItems={[
          {
              label: "Favorites",
              icon: <i className="" />,
              clickHandler: (() => {})
          },
          {
            label: "Templates",
            icon: <i className="" />,
            clickHandler: (() => {})
        }
      ]}/>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
