import React from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  Title,
  SectionContainer,
  Subtitle,
  UploadButton,
  StyledHelperText,
} from "../Style";
import SimpleFormInput from "../../SimpleFormInput";
import AddressComponent from "../../AddressComponent/AddressComponent";
import Thumb from "../../Thumb";
import { genders, maritalStatus } from "../types";
import { states } from "../../../utils/states";

const RepresentativeScreen = ({ countries, formik }) => {
  return (
    <div>
      <div>
        <Title>Datos del Representante Legal</Title>
        <Grid container xs={12}>
          <SectionContainer container xs={12}>
            <SimpleFormInput label="Nombre">
              <TextField
                className="input-width-80"
                size="small"
                required
                label="Nombre del representante"
                variant="outlined"
                name="representativeName"
                value={formik.values.representativeName}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.representativeName)}
                helperText={formik.errors.representativeName}
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
                  name="representativeGender"
                  value={formik.values.representativeGender}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.representativeGender)}
                >
                  {genders.map((gen) => (
                    <MenuItem value={gen}>{gen}</MenuItem>
                  ))}
                </Select>
                <StyledHelperText>
                  {formik.errors.representativeGender}
                </StyledHelperText>
              </FormControl>
            </SimpleFormInput>

            <SimpleFormInput label="Estado civil" size={5}>
              <FormControl
                variant="outlined"
                className="input-width-80"
                size="small"
              >
                <InputLabel id="status">Estado civil</InputLabel>
                <Select
                  label="Estado civil"
                  id="status"
                  labelId="status"
                  required
                  name="representativeMaritalStatus"
                  value={formik.values.representativeMaritalStatus}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.representativeMaritalStatus)}
                >
                  {maritalStatus.map((st) => (
                    <MenuItem value={st}>{st}</MenuItem>
                  ))}
                </Select>
                <StyledHelperText>
                  {formik.errors.representativeMaritalStatus}
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
                style={{
                  margin: 15,
                  width: "80%",
                }}
                name="representativeBirthday"
                value={formik.values.representativeBirthday}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.representativeBirthday)}
                helperText={formik.errors.representativeBirthday}
              />
            </SimpleFormInput>

            <SimpleFormInput size={5} label="Entidad de nacimiento">
              <Autocomplete
                className="input-width-80"
                options={states.map((s) => s.nombre)}
                size="small"
                getOptionLabel={(option) => option}
                onChange={(e, value) => {
                  if (value) {
                    formik.setFieldValue(`representativeBirthState`, value);
                  }
                }}
                name={`representativeBirthState`}
                value={formik.values.representativeBirthState}
                error={Boolean(formik.errors.representativeBirthState)}
                helperText={formik.errors.representativeBirthState}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Entidad de nacimiento"
                    variant="outlined"
                    helperText={formik.errors.representativeBirthState}
                    error={Boolean(formik.errors.representativeBirthState)}
                  />
                )}
              />
            </SimpleFormInput>

            <SimpleFormInput size={5} label="País de nacimiento">
              <Autocomplete
                className="input-width-80"
                options={countries}
                size="small"
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="País"
                    variant="outlined"
                    error={Boolean(formik.errors.representativeBirthCountry)}
                    helperText={formik.errors.representativeBirthCountry}
                  />
                )}
                onChange={(e, value) => {
                  if (value) {
                    formik.setFieldValue(`representativeBirthCountry`, value);
                  }
                }}
                name={`representativeBirthCountry`}
                value={formik.values.representativeBirthCountry}
                error={Boolean(formik.errors.representativeBirthCountry)}
              />
            </SimpleFormInput>

            <SimpleFormInput label="Nacionalidad" size={5}>
              <TextField
                style={{ marginLeft: 15, width: "80%" }}
                size="small"
                required
                label="Nacionalidad"
                variant="outlined"
                name="representativeNacionality"
                value={formik.values.representativeNacionality}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.representativeNacionality)}
                helperText={formik.errors.representativeNacionality}
              />
            </SimpleFormInput>

            <SimpleFormInput label="CURP" size={10}>
              <TextField
                className="input-width-80"
                size="small"
                required
                label="CURP"
                variant="outlined"
                name="representativeCURP"
                value={formik.values.representativeCURP}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.representativeCURP)}
                helperText={formik.errors.representativeCURP}
              />
            </SimpleFormInput>

            <SimpleFormInput label="RFC" size={10}>
              <TextField
                className="input-width-80"
                size="small"
                required
                label="RFC"
                variant="outlined"
                name="representativeRFC"
                value={formik.values.representativeRFC}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.representativeRFC)}
                helperText={formik.errors.representativeRFC}
              />
            </SimpleFormInput>
          </SectionContainer>

          <SectionContainer container xs={12}>
            <Grid xs={12} className="grid-centered">
              <Subtitle>Documentación</Subtitle>

              <SimpleFormInput size={12} label="Teléfono">
                <TextField
                  className="input-width-80"
                  size="small"
                  required
                  variant="outlined"
                  name="representativePhone"
                  value={formik.values.representativePhone}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.representativePhone)}
                  helperText={formik.errors.representativePhone}
                />
              </SimpleFormInput>
              <SimpleFormInput size={12} label="Correo electrónico">
                <TextField
                  className="input-width-80"
                  size="small"
                  required
                  variant="outlined"
                  name="representativeEmail"
                  value={formik.values.representativeEmail}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.representativeEmail)}
                  helperText={formik.errors.representativeEmail}
                />
              </SimpleFormInput>
              <SimpleFormInput size={12} label="Documento de identificación">
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{
                      justifyContent: "center",
                      flexDirection: "column",
                      display: "flex",
                    }}
                  >
                    <input
                      id="imagen"
                      style={{ display: "none" }}
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        if (event.target.files.length > 0) {
                          formik.setFieldValue(
                            "representativeID",
                            event.currentTarget.files[0]
                          );
                        }
                      }}
                      name="representativeID"
                      error={Boolean(formik.errors.representativeID)}
                      helperText={formik.errors.representativeID}
                    />
                    <UploadButton htmlFor="imagen">
                      Subir tu documento de identificación
                    </UploadButton>
                  </Grid>
                  <Grid item xs={6}>
                    <Thumb file={formik.values.representativeID} />
                  </Grid>
                  <StyledHelperText>
                    {formik.errors.representativeID}
                  </StyledHelperText>
                </Grid>
              </SimpleFormInput>
            </Grid>
          </SectionContainer>
        </Grid>

        <AddressComponent
          title="Domicilio particular"
          countries={countries}
          type="representative"
          formik={formik}
        />
      </div>
    </div>
  );
};

export default RepresentativeScreen;
