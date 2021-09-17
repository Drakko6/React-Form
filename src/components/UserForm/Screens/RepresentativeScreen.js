import React, { useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Title, SectionContainer, Subtitle, UploadButton } from "../Style";
import SimpleFormInput from "../../SimpleFormInput";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddressComponent from "../../AddressComponent/AddressComponent";
import Thumb from "../../Thumb";
import { genders, maritalStatus } from "../types";
import { states } from "../../../utils/states";

const RepresentativeScreen = ({ countries, formik }) => {
  const [identification, setIdentification] = useState(undefined);

  return (
    <div>
      <div>
        <Title>Datos del Representante Legal</Title>

        <Grid container xs={12}>
          <SectionContainer container xs={12}>
            <SimpleFormInput label="Nombre">
              <TextField
                style={{ margin: 15, width: "100%" }}
                size="small"
                required
                // value={alertDescription}
                label="Nombre del representante"
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

            <SimpleFormInput label="Estado civil">
              <FormControl
                variant="outlined"
                style={{ margin: 15, width: "100%" }}
                size="small"
              >
                <InputLabel id="status">Estado civil</InputLabel>
                <Select
                  label="Estado civil"
                  id="status"
                  labelId="status"
                  required
                >
                  {maritalStatus.map((st) => (
                    <MenuItem value={st}>{st}</MenuItem>
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

            <SimpleFormInput size={12} label="Entidad de nacimiento">
              <Autocomplete
                style={{ margin: 15, width: "80%" }}
                options={states}
                size="small"
                getOptionLabel={(option) => option.nombre}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Entidad de nacimiento"
                    variant="outlined"
                  />
                )}
              />
            </SimpleFormInput>

            <SimpleFormInput size={12} label="País de nacimiento">
              <Autocomplete
                style={{ margin: 15, width: "80%" }}
                options={countries}
                size="small"
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField {...params} label="País" variant="outlined" />
                )}
              />
            </SimpleFormInput>

            <SimpleFormInput label="Nacionalidad">
              <TextField
                style={{ marginLeft: 15, width: "100%" }}
                size="small"
                required
                // value={alertDescription}
                label="Nacionalidad"
                variant="outlined"
                onChange={(e) => {
                  // setAlertDescription(e.target.value);
                  // setHasEdited(true);
                }}
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

            <SimpleFormInput label="RFC">
              <TextField
                style={{ margin: 15, width: "100%" }}
                size="small"
                required
                // value={alertDescription}
                label="RFC"
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
              <Subtitle>Documentación</Subtitle>

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
                        setIdentification(event.currentTarget.files[0]);
                      }}
                    />
                    <UploadButton htmlFor="imagen">
                      Subir tu documento de identificación
                    </UploadButton>
                  </Grid>
                  <Grid item xs={6}>
                    <Thumb file={identification} />
                  </Grid>
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
