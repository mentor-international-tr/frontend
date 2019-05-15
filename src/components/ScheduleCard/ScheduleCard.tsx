import React from "react";
import {
  MIScheduleCard,
  MICardContent,
  Header,
  Title,
  ActionButtonsWrapper,
  MessageBox,
  DateBox,
  Date,
} from "./ScheduleCardStyles";
import {
  Card,
  CardContent,
  IconButton,
} from "@material-ui/core";
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
    <MIScheduleCard>
      <MICardContent>
        <Header>
          <Title>{title}</Title>
          <ActionButtonsWrapper>
            <IconButton aria-label="Edit">
              <i className="fas fa-pencil-alt" />
            </IconButton>
            <IconButton aria-label="Delete">
              <i
                className="fa fa-trash"
                aria-hidden="true"
              />
            </IconButton>
          </ActionButtonsWrapper>
        </Header>
        <MessageBox>{message}</MessageBox>
        <DateBox>
          {dates.map((date: string) => {
            return <Date>{date}</Date>;
          })}
        </DateBox>
      </MICardContent>
    </MIScheduleCard>
  );
};

export default ScheduleCard;
