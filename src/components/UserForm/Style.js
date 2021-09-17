import {
  Button,
  Container,
  Stepper,
  Grid,
  CircularProgress,
} from "@material-ui/core";

import styled from "styled-components";

export const StyledContainer = styled(Container)`
  && {
    max-width: none;
    height: 90%;
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const StyledStepper = styled(Stepper)`
  && {
    padding-right: 0;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 24px;
  }
`;

export const BottomContainer = styled.div`
  display: block;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const StyledButton = styled(Button)`
  display: inline-flex !important;
  background-color: #000033 !important;
  margin-right: 1em !important;
  margin-left: 0 !important;
  color: #fff !important;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;
  padding: 5px 0px !important;
  width: 150px;

  &:hover {
    background-color: #fff !important;
    color: #000033 !important;
    border: 1px solid #000033 !important;
  }
`;

export const StyledNextButton = styled(Button)`
  display: inline-flex !important;
  background-color: #000033 !important;
  margin-right: 1em !important;
  margin-left: 0 !important;
  color: #fff !important;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;
  padding: 5px 0px !important;
  width: 150px;
  &:hover {
    background-color: #fff !important;
    color: #000033 !important;
    border: 1px solid #000033 !important;
  }
`;

export const StyledBackButton = styled(Button)`
  display: inline-flex !important;
  background-color: #fff !important;
  margin-right: 1em !important;
  margin-left: 0 !important;
  color: #000033 !important;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;
  padding: 5px 0px !important;
  width: 150px;
  &:hover {
    background-color: #000033 !important;
    color: #fff !important;
  }
`;

export const ScreenContainer = styled.div`
  font-family: "Roboto";
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
`;

export const Title = styled.h2`
  color: #000033;
  margin-top: 0;
  text-align: center;
`;
export const Subtitle = styled.h3`
  color: #5b5b80;
  font-weight: 400;
  text-align: center;
`;
export const Label = styled.h3`
  color: #5b5b80;
  font-weight: 400;
  text-align: end;
  font-size: small;
`;

export const StyledText = styled.h5`
  color: #5b5b80;
  font-weight: 400;
  margin: 0.5em;
`;

export const GridBottom = styled(Grid)`
  && {
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
    height: 10vh;
  }
`;
export const SavingLoading = styled(CircularProgress)`
  && {
    display: flex;
    color: white;
  }
`;

export const SavingContainer = styled.div`
  display: flex;
  position: absolute;
`;

export const SectionContainer = styled(Grid)`
  border: 2px solid rgb(233, 239, 255);
  padding: 10;
  justify-content: center;
  margin: 10px;
  padding: 20px;
`;

export const UploadButton = styled.label`
  margin: 15px;
  width: 80%;
  color: white;
  background-color: #000033;
  padding: 10px;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #000033;
  transition: background-color 250ms;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  :hover {
    color: #000033;
    background-color: white;
  }
`;
