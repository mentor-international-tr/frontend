import styled from "styled-components";
import vars from "lib/styles/variables";
const SelectionCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border: 2px solid ${vars.black};
  border-radius: 5px;
  width: 100%;
  margin: 0;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 10px 10px 10px -2px rgba(0, 0, 0, 0.28);
    -moz-box-shadow: 10px 10px 10px -2px rgba(0, 0, 0, 0.28);
    box-shadow: 10px 10px 10px -2px rgba(0, 0, 0, 0.28);
  }
  &:focus {
    border: 5px solid ${vars.black};
  }
  &:active {
    border: 5px solid ${vars.blue};
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${vars.black};
  padding: 1em;
`;

export { SelectionCard, IconContainer };
