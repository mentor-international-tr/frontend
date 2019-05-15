import styled from "styled-components";
import vars from "lib/styles/variables";
import {
  InputBase as MaterialInputBase,
  Paper as MaterialPaper,
} from "@material-ui/core";

const Paper = styled(MaterialPaper)`
  display: flex;
  justify-content: center;
  max-width: 600px;
  border: ${(props: { isMicOn: boolean }) =>
    props.isMicOn ? `2px solid ${vars.light_blue}` : ""};
`;

const InputBase = styled(MaterialInputBase)`
  width: 100%;
`;

export { Paper, InputBase };
