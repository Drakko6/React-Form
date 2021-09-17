import React, { useState } from "react";
import axios from "axios";
import { Grid, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { SectionContainer, Subtitle } from "../UserForm/Style";
import SimpleFormInput from "../SimpleFormInput";

const AddressComponent = ({ title, countries, formik, type }) => {
  const [districts, setDistricts] = useState([]);

  const fetchCP = async (cp) => {
    const data = await axios.get(
      `https://apis.forcsec.com/api/codigos-postales/20210917-4139fb57a4950b80/${cp}`
    );
    formik.setFieldValue(`${type}Municipality`, data.data.data.municipio);
    formik.setFieldValue(
      `${type}District`,
      data.data.data.asentamientos[0].nombre
    );
    formik.setFieldValue(`${type}City`, data.data.data.asentamientos[0].ciudad);
    formik.setFieldValue(`${type}State`, data.data.data.estado);
    formik.setFieldValue(`${type}Country`, "Mexico");

    setDistricts(data.data.data.asentamientos.map((d) => d.nombre));
  };

  return (
    <SectionContainer container xs={12}>
      <Grid xs={12} className="grid-centered">
        <Subtitle>{title}</Subtitle>

        <form>
          <SimpleFormInput size={10} label="Calle">
            <TextField
              className="input-width-100"
              size="small"
              required
              label="Calle"
              variant="outlined"
              name={`${type}Street`}
              value={formik.values[`${type}Street`]}
              onChange={formik.handleChange}
              error={Boolean(formik.errors[`${type}Street`])}
              helperText={formik.errors[`${type}Street`]}
            />
          </SimpleFormInput>

          <Grid container xs={12}>
            <Grid container xs={4}>
              <SimpleFormInput size={12} label="Núm. Exterior">
                <TextField
                  className="input-width-80"
                  size="small"
                  required
                  label="Núm. Exterior"
                  variant="outlined"
                  name={`${type}ExtNumber`}
                  value={formik.values[`${type}ExtNumber`]}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors[`${type}ExtNumber`])}
                  helperText={formik.errors[`${type}ExtNumber`]}
                />
              </SimpleFormInput>
            </Grid>
            <Grid container xs={4}>
              <SimpleFormInput size={12} label="Núm. Interior">
                <TextField
                  type="number"
                  className="input-width-80"
                  size="small"
                  label="Núm. Exterior"
                  variant="outlined"
                  name={`${type}IntNumber`}
                  value={formik.values[`${type}IntNumber`]}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors[`${type}IntNumber`])}
                  helperText={formik.errors[`${type}IntNumber`]}
                  inputProps={{
                    min: 1,
                  }}
                />
              </SimpleFormInput>
            </Grid>

            <Grid container xs={4}>
              <SimpleFormInput size={12} label="Código Postal">
                <TextField
                  className="input-width-80"
                  size="small"
                  required
                  label="Código Postal"
                  variant="outlined"
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (e.target.value.length === 5) {
                      fetchCP(e.target.value);
                    }
                  }}
                  name={`${type}CP`}
                  value={formik.values[`${type}CP`]}
                  error={Boolean(formik.errors[`${type}CP`])}
                  helperText={formik.errors[`${type}CP`]}
                />
              </SimpleFormInput>
            </Grid>
          </Grid>

          <Grid container xs={12}>
            <Grid container xs={4}>
              <SimpleFormInput size={12} label="Colonia">
                <Autocomplete
                  freeSolo
                  className="input-width-80"
                  options={districts}
                  size="small"
                  getOptionLabel={(option) => option}
                  onChange={(e, value) => {
                    formik.setFieldValue(`${type}District`, value);
                  }}
                  name={`${type}District`}
                  value={formik.values[`${type}District`]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Colonia"
                      variant="outlined"
                      error={Boolean(formik.errors[`${type}District`])}
                      helperText={formik.errors[`${type}District`]}
                    />
                  )}
                />
              </SimpleFormInput>
            </Grid>
            <Grid container xs={4}>
              <SimpleFormInput size={12} label="Delegación o Municipio">
                <TextField
                  className="input-width-80"
                  size="small"
                  required
                  variant="outlined"
                  onChange={formik.handleChange}
                  name={`${type}Municipality`}
                  value={formik.values[`${type}Municipality`]}
                  error={Boolean(formik.errors[`${type}Municipality`])}
                  helperText={formik.errors[`${type}Municipality`]}
                />
              </SimpleFormInput>
            </Grid>
            <Grid container xs={4}>
              <SimpleFormInput size={12} label="Ciudad o Población">
                <TextField
                  className="input-width-80"
                  size="small"
                  required
                  variant="outlined"
                  onChange={formik.handleChange}
                  name={`${type}City`}
                  value={formik.values[`${type}City`]}
                  error={Boolean(formik.errors[`${type}City`])}
                  helperText={formik.errors[`${type}City`]}
                />
              </SimpleFormInput>
            </Grid>
          </Grid>

          <Grid container xs={12}>
            <Grid container xs={4}>
              <SimpleFormInput size={12} label="Entidad o Estado">
                <TextField
                  className="input-width-80"
                  size="small"
                  required
                  variant="outlined"
                  onChange={formik.handleChange}
                  name={`${type}State`}
                  value={formik.values[`${type}State`]}
                  error={Boolean(formik.errors[`${type}State`])}
                  helperText={formik.errors[`${type}State`]}
                />
              </SimpleFormInput>
            </Grid>
            <Grid container xs={4}>
              <SimpleFormInput size={12} label="País">
                <Autocomplete
                  className="input-width-80"
                  options={countries}
                  size="small"
                  getOptionLabel={(option) => option}
                  onChange={(e, value) => {
                    formik.setFieldValue(`${type}Country`, value);
                  }}
                  name={`${type}Country`}
                  value={formik.values[`${type}Country`]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="País"
                      variant="outlined"
                      error={Boolean(formik.errors[`${type}Country`])}
                      helperText={formik.errors[`${type}Country`]}
                    />
                  )}
                />
              </SimpleFormInput>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </SectionContainer>
  );
};

export default AddressComponent;
