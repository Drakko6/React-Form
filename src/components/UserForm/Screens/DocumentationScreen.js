import React from "react";
import { Grid, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  Title,
  SectionContainer,
  Subtitle,
  UploadButton,
  StyledHelperText,
} from "../Style";
import SimpleFormInput from "../../SimpleFormInput";
import Thumb from "../../Thumb";
import { banks } from "../../../utils/banks";

const DocumentationScreen = ({ formik }) => {
  return (
    <div>
      <div>
        <Title>Documentos y datos bancarios</Title>
        <Grid container xs={12}>
          <SectionContainer container xs={12}>
            <Grid xs={12} className="grid-centered">
              <Subtitle>Documentación</Subtitle>

              <SimpleFormInput size={12} label="Comprobante de domicilio">
                <Grid container>
                  <Grid item xs={6} className="grid-item-centered">
                    <input
                      id="imagen"
                      style={{ display: "none" }}
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        if (event.target.files.length > 0) {
                          formik.setFieldValue(
                            "addressProof",
                            event.currentTarget.files[0]
                          );
                        }
                      }}
                      name="addressProof"
                      error={Boolean(formik.errors.addressProof)}
                      helperText={formik.errors.addressProof}
                    />
                    <UploadButton htmlFor="imagen">
                      Subir tu comprobante de domicilio
                    </UploadButton>
                  </Grid>
                  <Grid item xs={6}>
                    <Thumb file={formik.values.addressProof} />
                  </Grid>
                  <StyledHelperText>
                    {formik.errors.addressProof}
                  </StyledHelperText>
                </Grid>
              </SimpleFormInput>

              <SimpleFormInput size={12} label="Teléfono">
                <TextField
                  className="input-width-80"
                  size="small"
                  required
                  variant="outlined"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.phone)}
                  helperText={formik.errors.phone}
                />
              </SimpleFormInput>

              <SimpleFormInput size={12} label="Correo electrónico">
                <TextField
                  className="input-width-80"
                  size="small"
                  required
                  variant="outlined"
                  name="userEmail"
                  value={formik.values.userEmail}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.userEmail)}
                  helperText={formik.errors.userEmail}
                />
              </SimpleFormInput>
            </Grid>
          </SectionContainer>

          <SectionContainer container xs={12}>
            <Grid xs={12} className="grid-centered">
              <Subtitle>Cuenta Bancaria</Subtitle>

              <SimpleFormInput size={12} label="CLABE">
                <TextField
                  className="input-width-80"
                  size="small"
                  required
                  variant="outlined"
                  name="clabe"
                  value={formik.values.clabe}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.clabe)}
                  helperText={formik.errors.clabe}
                />
              </SimpleFormInput>

              <SimpleFormInput size={12} label="Banco">
                <Autocomplete
                  freeSolo
                  className="input-width-80"
                  options={banks.map((b) => b.marca)}
                  size="small"
                  getOptionLabel={(option) => option}
                  onChange={(e, value) => {
                    if (value) {
                      formik.setFieldValue(`bank`, value);
                    }
                  }}
                  name={`bank`}
                  value={formik.values.bank}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Banco"
                      variant="outlined"
                      error={Boolean(formik.errors.bank)}
                      helperText={formik.errors.bank}
                    />
                  )}
                />
              </SimpleFormInput>
            </Grid>
          </SectionContainer>
        </Grid>
      </div>
    </div>
  );
};

export default DocumentationScreen;
