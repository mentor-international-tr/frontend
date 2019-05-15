import "./schedule-section.scss";
import React from "react";
import ScheduleCard from "components/ScheduleCard/ScheduleCard";

export interface ScheduleSectionProps {}

const ScheduleSection: React.SFC<ScheduleSectionProps> = () => {
  return (
    <section className="schedule-section">
      <section className="schedule-cards">
        <ScheduleCard
          title="Class Reminder"
          message={
            "Don't forget, class tonight at 8 pm! Don't forget, class tonight at 8 pm!"
          }
          dates={["July 20th", "Nov 24th"]}
        />
        <ScheduleCard
          title="Class Reminder"
          message={
            "Don't forget, class tonight at 8 pm! Don't forget, class tonight at 8 pm!"
          }
          dates={["July 20th", "Nov 24th"]}
        />
        <ScheduleCard
          title="Class Reminder"
          message={
            "Don't forget, class tonight at 8 pm! Don't forget, class tonight at 8 pm!"
          }
          dates={["July 20th", "Nov 24th"]}
        />
        <ScheduleCard
          title="Class Reminder"
          message={
            "Don't forget, class tonight at 8 pm! Don't forget, class tonight at 8 pm!"
          }
          dates={["July 20th", "Nov 24th"]}
        />
      </section>
    </section>
  );
};

export default ScheduleSection;
