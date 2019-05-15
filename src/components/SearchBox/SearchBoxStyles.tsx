import styled from "styled-components";
import vars from "lib/styles/variables";
import { InputBase, Paper } from "@material-ui/core";

const MIPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  max-width: 600px;
  border: ${(props: { ismicon: string }) =>
    props.ismicon === "true"
      ? `2px solid ${vars.light_blue}`
      : ""};
`;

const MIInputBase = styled(InputBase)`
  width: 100%;
`;

export { MIPaper, MIInputBase };
