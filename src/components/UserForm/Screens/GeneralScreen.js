import React from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Title, SectionContainer } from "../Style";
import SimpleFormInput from "../../SimpleFormInput";
import { businesses, industries, regimes } from "../types";

const ParamsScreen = ({ formik }) => {
  return (
    <div>
      <div>
        <Title>Datos generales</Title>
        <Grid container xs={12}>
          <SectionContainer container xs={12}>
            <SimpleFormInput label="Razón social" size={10}>
              <FormControl
                variant="outlined"
                className="input-width-80"
                size="small"
              >
                <InputLabel id="business">Razón</InputLabel>
                <Select
                  label="Razón"
                  id="business"
                  name="business"
                  labelId="business"
                  required
                  value={formik.values.business}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.business)}
                  helperText={formik.errors.business}
                >
                  {businesses.map((bus) => (
                    <MenuItem value={bus}>{bus}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </SimpleFormInput>

            <SimpleFormInput label="Nombre comercial" size={10}>
              <TextField
                id="commercialName"
                name="commercialName"
                className="input-width-80"
                size="small"
                required
                label="Nombre comercial de la empresa"
                variant="outlined"
                value={formik.values.commercialName}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.commercialName)}
                helperText={formik.errors.commercialName}
              />
            </SimpleFormInput>

            <SimpleFormInput label="Nacionalidad" size={10}>
              <TextField
                style={{ marginLeft: 15, width: "80%" }}
                size="small"
                required
                label="Nacionalidad"
                variant="outlined"
                name="userNacionality"
                value={formik.values.userNacionality}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.userNacionality)}
                helperText={formik.errors.userNacionality}
              />
            </SimpleFormInput>

            <SimpleFormInput label="Fecha de constitución" size={6}>
              <TextField
                label="Fecha de constitución"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                className="input-width-80"
                name="createDate"
                value={formik.values.createDate}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.createDate)}
                helperText={formik.errors.createDate}
              />
            </SimpleFormInput>

            <SimpleFormInput label="Fecha de inicio" size={6}>
              <TextField
                label="Fecha de inicio"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                className="input-width-80"
                name="startDate"
                value={formik.values.startDate}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.startDate)}
                helperText={formik.errors.startDate}
              />
            </SimpleFormInput>

            <SimpleFormInput label="RFC" size={10}>
              <TextField
                className="input-width-80"
                size="small"
                required
                label="RFC"
                variant="outlined"
                name="userRFC"
                value={formik.values.userRFC}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.userRFC)}
                helperText={formik.errors.userRFC}
              />
            </SimpleFormInput>

            <SimpleFormInput label="Régimen fiscal" size={10}>
              <FormControl
                variant="outlined"
                className="input-width-80"
                size="small"
              >
                <InputLabel id="regime">Régimen fiscal</InputLabel>
                <Select
                  label="Régimen fiscal"
                  id="regime"
                  labelId="regime"
                  required
                  name="regime"
                  value={formik.values.regime}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.regime)}
                  helperText={formik.errors.regime}
                >
                  {regimes.map((reg) => (
                    <MenuItem value={reg}>{reg}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </SimpleFormInput>

            <SimpleFormInput label="Industria" size={10}>
              <FormControl
                variant="outlined"
                className="input-width-80"
                size="small"
              >
                <InputLabel id="industry">Industria</InputLabel>
                <Select
                  label="Industria"
                  id="industriy"
                  labelId="industriy"
                  name="industry"
                  value={formik.values.industry}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.industry)}
                  helperText={formik.errors.industry}
                >
                  {industries.map((ind) => (
                    <MenuItem value={ind}>{ind}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </SimpleFormInput>
          </SectionContainer>
        </Grid>
      </div>
    </div>
  );
};

export default ParamsScreen;
