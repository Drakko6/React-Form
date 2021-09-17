import React from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Title, SectionContainer, Subtitle, StyledHelperText } from "../Style";
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
                className="input-width-80"
                size="small"
                required
                label="Nombre del beneficiario"
                variant="outlined"
                name="beneficiaryName"
                value={formik.values.beneficiaryName}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.beneficiaryName)}
                helperText={formik.errors.beneficiaryName}
              />
            </SimpleFormInput>

            <SimpleFormInput label="Género" size={5}>
              <FormControl
                variant="outlined"
                className="input-width-80"
                size="small"
              >
                <InputLabel id="gender">Género</InputLabel>
                <Select
                  label="Género"
                  id="gender"
                  labelId="gender"
                  required
                  name="beneficiaryGender"
                  value={formik.values.beneficiaryGender}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.beneficiaryGender)}
                >
                  {genders.map((gen) => (
                    <MenuItem value={gen}>{gen}</MenuItem>
                  ))}
                </Select>
                <StyledHelperText>
                  {formik.errors.beneficiaryGender}
                </StyledHelperText>
              </FormControl>
            </SimpleFormInput>

            <SimpleFormInput label="Fecha de nacimiento" size={5}>
              <TextField
                id="time"
                label="Fecha de nacimiento"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                className="input-width-80"
                name="beneficiaryBirthday"
                value={formik.values.beneficiaryBirthday}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.beneficiaryBirthday)}
                helperText={formik.errors.beneficiaryBirthday}
              />
            </SimpleFormInput>

            <SimpleFormInput label="CURP" size={10}>
              <TextField
                className="input-width-80"
                size="small"
                required
                label="CURP"
                variant="outlined"
                name="beneficiaryCURP"
                value={formik.values.beneficiaryCURP}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.beneficiaryCURP)}
                helperText={formik.errors.beneficiaryCURP}
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
                  className="input-width-80"
                  size="small"
                  required
                  variant="outlined"
                  name="beneficiaryPhone"
                  value={formik.values.beneficiaryPhone}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.beneficiaryPhone)}
                  helperText={formik.errors.beneficiaryPhone}
                />
              </SimpleFormInput>
              <SimpleFormInput size={12} label="Correo electrónico">
                <TextField
                  className="input-width-80"
                  size="small"
                  required
                  variant="outlined"
                  name="beneficiaryEmail"
                  value={formik.values.beneficiaryEmail}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.beneficiaryEmail)}
                  helperText={formik.errors.beneficiaryEmail}
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
