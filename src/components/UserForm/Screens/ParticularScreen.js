import React from "react";
import { Grid } from "@material-ui/core";
import { Title } from "../Style";
import AddressComponent from "../../AddressComponent/AddressComponent";

const ParticularScreen = ({ countries, formik }) => {
  return (
    <div>
      <div>
        <Title>Datos particulares</Title>
        <Grid container xs={12}>
          <AddressComponent
            title="Domicilio del usuario"
            countries={countries}
            formik={formik}
            type="user"
          />
        </Grid>
      </div>
    </div>
  );
};

export default ParticularScreen;
