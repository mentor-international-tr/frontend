import styled from "styled-components";
import vars from "lib/styles/variables";
import { Card, CardContent } from "@material-ui/core";

const MIScheduleCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  background: ${vars.white};
`;

const MICardContent = styled(CardContent)`
  background: ${vars.white};
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2``;

const ActionButtonsWrapper = styled.div``;

const MessageBox = styled.div`
  border: 1px solid ${vars.grey};
  border-radius: 2px;
  padding: ${vars.space_md} ${vars.space_xl}
    ${vars.space_md} ${vars.space_xl};
  position: relative;
  margin-bottom: ${vars.space_md};
  &:before {
    content: "Message";
    position: absolute;
    background: ${vars.white};
    top: -12px;
  }
`;

const DateBox = styled.div`
  border: 1px solid ${vars.grey};
  border-radius: 2px;
  padding: ${vars.space_sm};
  position: relative;
  &:before {
    content: "Dates to Send";
    position: absolute;
    background: ${vars.white};
    top: -12px;
  }
`;
const Date = styled.p`
  margin: 0;
`;

export {
  MIScheduleCard,
  MICardContent,
  Header,
  Title,
  ActionButtonsWrapper,
  MessageBox,
  DateBox,
  Date,
};
