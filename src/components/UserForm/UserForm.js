/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Grid, Step, StepButton } from "@material-ui/core";
import Swal from "sweetalert2";
import { CustomConnector } from "./CustomConnector";
import {
  StyledContainer,
  BottomContainer,
  ButtonContainer,
  StyledButton,
  ScreenContainer,
  StyledBackButton,
  StyledNextButton,
  StyledStepper,
  GridBottom,
  SavingContainer,
  SavingLoading,
} from "./Style";
import { checkCompletedSteps } from "./functions";
import GeneralScreen from "./Screens/GeneralScreen";
import ParticularScreen from "./Screens/ParticularScreen";
import DocumentationScreen from "./Screens/DocumentationScreen";
import RepresentativeScreen from "./Screens/RepresentativeScreen";
import BeneficiaryScreen from "./Screens/BeneficiaryScreen";
import axios from "axios";
import { useFormik } from "formik";
import { ValidationSchema } from "./types";

const UserForm = ({ steps, setShowModal, setOnSaving, onSaving }) => {
  const [activeStep, setActiveStep] = useState(0);

  const [completedSteps, setCompletedSteps] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [countries, setCountries] = useState([]);

  const formik = useFormik({
    initialValues: {
      business: "",
      commercialName: "",
      userNacionality: "",
      createDate: "",
      startDate: "",
      userRFC: "",
      regime: "",
      industry: "",
      userStreet: "",
      userExtNumber: "",
      userIntNumber: "",
      userCP: "",
      userDistrict: "",
      userMunicipality: "",
      userCity: "",
      userState: "",
      userCountry: "",
      representativeStreet: "",
      representativeExtNumber: "",
      representativeIntNumber: "",
      representativeCP: "",
      representativeDistrict: "",
      representativeMunicipality: "",
      representativeCity: "",
      representativeState: "",
      representativeCountry: "",
      addressProof: undefined,
      phone: "",
      userEmail: "",
      representativePhone: "",
      representativeEmail: "",
      clabe: "",
      bank: "",
      representativeName: "",
      representativeGender: "",
      representativeMaritalStatus: "",
      representativeBirthday: "",
      representativeBirthState: "",
      representativeBirthCountry: "",
      representativeNacionality: "",
      representativeCURP: "",
      representativeRFC: "",
      representativeID: undefined,
      beneficiaryName: "",
      beneficiaryGender: "",
      beneficiaryBirthday: "",
      beneficiaryCURP: "",
      beneficiaryPhone: "",
      beneficiaryEmail: "",
      beneficiaryStreet: "",
      beneficiaryExtNumber: "",
      beneficiaryIntNumber: "",
      beneficiaryCP: "",
      beneficiaryDistrict: "",
      beneficiaryMunicipality: "",
      beneficiaryCity: "",
      beneficiaryState: "",
      beneficiaryCountry: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const countries = await axios.get(`https://restcountries.eu/rest/v2/all`);
    setCountries(countries.data.map((c) => c.name));
  };
  const handleChangeStep = (sum, i) => {
    switch (activeStep) {
      case 0:
        if (
          !formik.errors.business &&
          !formik.errors.commercialName &
            !formik.errors.createDate &
            !formik.errors.industry &
            !formik.errors.regime &
            !formik.errors.startDate &
            !formik.errors.userNacionality &
            !formik.errors.userRFC
        ) {
          if (i >= 0) {
            setActiveStep(i);
          } else {
            setActiveStep((prevActiveStep) => prevActiveStep + sum);
          }
        }
        break;

      case 1:
        if (
          !formik.errors.userStreet &&
          !formik.errors.userExtNumber &
            !formik.errors.userCP &
            !formik.errors.userDistrict &
            !formik.errors.userMunicipality &
            !formik.errors.userCity &
            !formik.errors.userState &
            !formik.errors.userCountry
        ) {
          if (i >= 0) {
            setActiveStep(i);
          } else {
            setActiveStep((prevActiveStep) => prevActiveStep + sum);
          }
        }
        break;
      case 2:
        if (
          !formik.errors.addressProof &&
          !formik.errors.phone &
            !formik.errors.userEmail &
            !formik.errors.clabe &
            !formik.errors.bank
        ) {
          if (i >= 0) {
            setActiveStep(i);
          } else {
            setActiveStep((prevActiveStep) => prevActiveStep + sum);
          }
        }
        break;
      default:
        if (i >= 0) {
          setActiveStep(i);
        } else {
          setActiveStep((prevActiveStep) => prevActiveStep + sum);
        }
        break;
    }
    checkCompletedSteps(activeStep, completedSteps, setCompletedSteps, formik);
  };

  const saveUser = () => {
    if (completedSteps.every((step) => step)) {
      setOnSaving(true);

      // TODO: Validar que no haya errores

      // TODO: Meter las validaciones en campos y en funciones

      console.log("Guardando datos de Usuario");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Configuración incompleta",
        text: "Los pasos no se han completado",
      });
    }
  };

  return (
    <StyledContainer>
      <StyledStepper
        nonLinear
        alternativeLabel
        activeStep={activeStep}
        connector={<CustomConnector />}
      >
        {steps.map((label, i) => (
          <Step key={label} completed={completedSteps[i]}>
            <StepButton
              onClick={() => {
                handleChangeStep(0, i);
              }}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </StyledStepper>

      <Grid
        container
        direction="column"
        style={{ height: "72%", justifyContent: "center" }}
      >
        <ScreenContainer>
          {activeStep === 0 && <GeneralScreen formik={formik} />}

          {activeStep === 1 && (
            <ParticularScreen countries={countries} formik={formik} />
          )}

          {activeStep === 2 && <DocumentationScreen formik={formik} />}

          {activeStep === 3 && (
            <RepresentativeScreen countries={countries} formik={formik} />
          )}

          {activeStep === 4 && (
            <BeneficiaryScreen countries={countries} formik={formik} />
          )}
        </ScreenContainer>
      </Grid>

      <GridBottom>
        <div style={{ display: "flex" }}>
          <BottomContainer>
            <ButtonContainer>
              {activeStep !== 0 && (
                <StyledBackButton
                  variant="outlined"
                  color="primary"
                  disabled={activeStep === 0}
                  onClick={() => handleChangeStep(-1)}
                >
                  Atrás
                </StyledBackButton>
              )}
              {activeStep < 4 ? (
                <StyledNextButton
                  variant="contained"
                  color="secondary"
                  onClick={() => handleChangeStep(1)}
                >
                  Siguiente
                </StyledNextButton>
              ) : (
                <>
                  <StyledButton
                    variant="contained"
                    color="secondary"
                    disabled={onSaving}
                    onClick={() => saveUser()}
                  >
                    Guardar información
                    {onSaving && (
                      <SavingContainer>
                        <SavingLoading />
                      </SavingContainer>
                    )}
                  </StyledButton>
                </>
              )}
            </ButtonContainer>
          </BottomContainer>
        </div>
      </GridBottom>
    </StyledContainer>
  );
};

export default UserForm;
