import styled from "styled-components";
import { Button } from "@material-ui/core";

export const HeadContainer = styled.div`
  display: block;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
  display: inline-flex !important;
  background-color: #000033 !important;
  margin-right: 1em !important;
  margin-left: 0 !important;
  color: #fff !important;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;
  padding: 7px 14px !important;

  &:hover {
    background-color: #fff !important;
    color: #000 !important;
  }
`;
