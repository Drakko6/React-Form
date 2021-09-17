import React from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Title, SectionContainer, Subtitle } from "../Style";
import SimpleFormInput from "../../SimpleFormInput";
import AddressComponent from "../../AddressComponent/AddressComponent";
import { genders } from "../types";

const BeneficiaryScreen = ({ countries, formik }) => {
  return (
    <div>
      <div>
        <Title>Datos del Beneficiario</Title>

        <Grid container xs={12}>
          <SectionContainer container xs={12}>
            <SimpleFormInput label="Nombre">
              <TextField
                style={{ margin: 15, width: "100%" }}
                size="small"
                required
                // value={alertDescription}
                label="Nombre del beneficiario"
                variant="outlined"
                onChange={(e) => {}}
              />
            </SimpleFormInput>

            <SimpleFormInput label="Género">
              <FormControl
                variant="outlined"
                style={{ margin: 15, width: "100%" }}
                size="small"
              >
                <InputLabel id="gender">Género</InputLabel>
                <Select label="Género" id="gender" labelId="gender" required>
                  {genders.map((gen) => (
                    <MenuItem value={gen}>{gen}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </SimpleFormInput>

            <SimpleFormInput label="Fecha de nacimiento">
              <TextField
                id="time"
                label="Fecha de nacimiento"
                type="date"
                // defaultValue="00:00"
                InputLabelProps={{
                  shrink: true,
                }}
                // inputProps={{
                //   step: 600, // 10 min
                //   // max: ranges[i]?.toTime,
                // }}
                style={{
                  margin: 15,
                  width: "80%",
                }}
                // value={ranges[i]?.fromTime}
                // error={rangeError[i] || repeteadRanges[i]}
                onChange={(e) => console.log(e.target.value)}
              />
            </SimpleFormInput>

            <SimpleFormInput label="CURP">
              <TextField
                style={{ margin: 15, width: "100%" }}
                size="small"
                required
                // value={alertDescription}
                label="CURP"
                variant="outlined"
                onChange={(e) => {
                  // setAlertDescription(e.target.value);
                  // setHasEdited(true);
                }}
              />
            </SimpleFormInput>
          </SectionContainer>

          <SectionContainer container xs={12}>
            <Grid
              xs={12}
              style={{
                alignItems: "center",
                flexDirection: "column",
                display: "flex",
              }}
            >
              <Subtitle>Contacto</Subtitle>

              <SimpleFormInput size={12} label="Teléfono">
                <TextField
                  style={{ margin: 15, width: "80%" }}
                  size="small"
                  required
                  variant="outlined"
                  // value=""
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </SimpleFormInput>
              <SimpleFormInput size={12} label="Correo electrónico">
                <TextField
                  style={{ margin: 15, width: "80%" }}
                  size="small"
                  required
                  variant="outlined"
                  // value=""
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </SimpleFormInput>
            </Grid>
          </SectionContainer>
        </Grid>

        <AddressComponent
          title="Domicilio particular"
          countries={countries}
          type="beneficiary"
          formik={formik}
        />
      </div>
    </div>
  );
};

export default BeneficiaryScreen;
