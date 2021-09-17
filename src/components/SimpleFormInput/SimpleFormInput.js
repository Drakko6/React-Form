import React from "react";
import { Grid } from "@material-ui/core";
import { Label } from "../UserForm/Style";

const SimpleFormInput = ({ label, children, size }) => {
  return (
    <Grid
      container
      xs={size ? size : 9}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid item xs={3}>
        <Label>{label}</Label>
      </Grid>

      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SimpleFormInput;
