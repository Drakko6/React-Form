/* eslint-disable no-nested-ternary */
import styled from "styled-components";
import { Paper } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export const ModalChildrenContainer = styled(Paper)`
  && {
    outline: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    height: 90vh;
    width: ${({ size }) =>
      size === "small" ? "50vw" : size === "medium" ? "60vw" : "90vw"};
    height: ${({ size }) =>
      size === "small" ? "40vh" : size === "medium" ? "90vh" : "90vh"};
  }
`;

export const OnCloseIcon = styled(CloseIcon)`
  && {
    margin-inline-start: auto;
    padding: 6px;
    color: crimson;
    cursor: pointer;

    :hover {
      color: red;
    }
  }
`;
