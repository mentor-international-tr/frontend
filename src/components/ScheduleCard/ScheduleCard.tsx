import "./schedule-card.scss";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { IconButton } from "@material-ui/core";
export interface ScheduleCardProps {
  title: string;
  message: string;
  dates: string[];
}

const ScheduleCard: React.SFC<ScheduleCardProps> = ({
  title,
  message,
  dates,
}) => {
  return (
    <Card className="schedule-card">
      <CardContent className="schedule-card__content">
        <header className="schedule-card__header">
          <h2 className="schedule-card__title">{title}</h2>
          <div className="schedule-card__action-btns">
            <IconButton aria-label="Edit">
              <i className="fas fa-pencil-alt" />
            </IconButton>
            <IconButton aria-label="Delete">
              <i
                className="fa fa-trash"
                aria-hidden="true"
              />
            </IconButton>
          </div>
        </header>
        <div className="schedule-card__msg-box">
          {message}
        </div>
        <div className="schedule-card__date-box">
          {dates.map((date: string) => {
            return (
              <p className="schedule-card__date">{date}</p>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
