import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useFormik } from "formik";
import { Grid, Step, StepButton } from "@material-ui/core";
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
import GeneralScreen from "./Screens/GeneralScreen";
import ParticularScreen from "./Screens/ParticularScreen";
import DocumentationScreen from "./Screens/DocumentationScreen";
import RepresentativeScreen from "./Screens/RepresentativeScreen";
import BeneficiaryScreen from "./Screens/BeneficiaryScreen";
import { checkCompletedSteps } from "./functions";
import { ValidationSchema } from "./types";

const UserForm = ({ steps, setShowModal, setOnSaving, onSaving }) => {
  const screenRef = useRef(null);

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
      addressProof: undefined,
      phone: "",
      userEmail: "",
      clabe: "",
      bank: "",
      representativeStreet: "",
      representativeExtNumber: "",
      representativeIntNumber: "",
      representativeCP: "",
      representativeDistrict: "",
      representativeMunicipality: "",
      representativeCity: "",
      representativeState: "",
      representativeCountry: "",
      representativePhone: "",
      representativeEmail: "",
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
    if (i >= 0) {
      setActiveStep(i);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + sum);
    }
    screenRef.current.scrollTop = 0;
    checkCompletedSteps(activeStep, completedSteps, setCompletedSteps, formik);
  };
  const saveUser = () => {
    if (
      !!formik.values.beneficiaryName &
      !!formik.values.beneficiaryGender &
      !!formik.values.beneficiaryBirthday &
      !!formik.values.beneficiaryCURP &
      !!formik.values.beneficiaryPhone &
      !!formik.values.beneficiaryEmail &
      !!formik.values.beneficiaryStreet &
      !!formik.values.beneficiaryExtNumber &
      !!formik.values.beneficiaryCP &
      !!formik.values.beneficiaryDistrict &
      !!formik.values.beneficiaryMunicipality &
      !!formik.values.beneficiaryCity &
      !!formik.values.beneficiaryState &
      !!formik.values.beneficiaryCountry
    ) {
      completedSteps.fill(true);

      if (completedSteps.every((step) => step)) {
        setOnSaving(true);

        setTimeout(() => {
          setOnSaving(false);
          setShowModal(false);

          Swal.fire({
            icon: "success",
            title: "Guardado",
            text: "Usuario guardado con éxito",
          });
        }, 2000);
      } else {
        Swal.fire({
          icon: "warning",
          title: "Configuración incompleta",
          text: "Los pasos no se han completado",
        });
      }
    } else {
      setCompletedSteps(
        completedSteps.map((step, i) => {
          if (i === activeStep) return false;
          return step;
        })
      );

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
        <ScreenContainer ref={screenRef}>
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
                    onClick={saveUser}
                  >
                    Guardar
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
