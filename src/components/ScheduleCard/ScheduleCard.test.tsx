import React from "react";
import { render, cleanup } from "react-testing-library";
import ScheduleCard from "./ScheduleCard";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("testing <ScheduleCard /> component", () => {
  it("creates snapshot", () => {
    const { asFragment } = render(
      <ScheduleCard
        title="Class Reminder"
        message={
            "Don't forget, class tonight at 8 pm! Don't forget, class tonight at 8 pm!"
        }
        dates={["July 20th", "Nov 24th"]}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
