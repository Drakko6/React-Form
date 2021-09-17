import Swal from "sweetalert2";

export const checkCompletedSteps = (
  activeStep,
  completedSteps,
  setCompletedSteps,
  formik
) => {
  switch (activeStep) {
    case 0:
      if (
        !!formik.values.business &&
        !!formik.values.commercialName &
          !!formik.values.createDate &
          !!formik.values.industry &
          !!formik.values.regime &
          !!formik.values.startDate &
          !!formik.values.userNacionality &
          !!formik.values.userRFC
      ) {
        setCompletedSteps(
          completedSteps.map((step, i) => {
            if (i === activeStep) return true;
            return step;
          })
        );
      } else {
        setCompletedSteps(
          completedSteps.map((step, i) => {
            if (i === activeStep) return false;
            return step;
          })
        );
      }

      break;

    case 1:
      if (
        !!formik.values.userStreet &&
        !!formik.values.userExtNumber &
          !!formik.values.userCP &
          !!formik.values.userDistrict &
          !!formik.values.userMunicipality &
          !!formik.values.userCity &
          !!formik.values.userState &
          !!formik.values.userCountry
      ) {
        setCompletedSteps(
          completedSteps.map((step, i) => {
            if (i === activeStep) return true;
            return step;
          })
        );
      } else {
        setCompletedSteps(
          completedSteps.map((step, i) => {
            if (i === activeStep) return false;
            return step;
          })
        );
      }

      break;
    case 2:
      if (
        !!formik.values.addressProof &&
        !!formik.values.phone &
          !!formik.values.userEmail &
          !!formik.values.clabe &
          !!formik.values.bank
      ) {
        setCompletedSteps(
          completedSteps.map((step, i) => {
            if (i === activeStep) return true;
            return step;
          })
        );
      } else {
        setCompletedSteps(
          completedSteps.map((step, i) => {
            if (i === activeStep) return false;
            return step;
          })
        );
      }

      break;
    case 3:
      if (
        !!formik.values.representativeStreet &
        !!formik.values.representativeExtNumber &
        !!formik.values.representativeCP &
        !!formik.values.representativeDistrict &
        !!formik.values.representativeMunicipality &
        !!formik.values.representativeCity &
        !!formik.values.representativeState &
        !!formik.values.representativeCountry &
        !!formik.values.representativePhone &
        !!formik.values.representativeEmail &
        !!formik.values.representativeName &
        !!formik.values.representativeGender &
        !!formik.values.representativeMaritalStatus &
        !!formik.values.representativeBirthday &
        !!formik.values.representativeBirthState &
        !!formik.values.representativeBirthCountry &
        !!formik.values.representativeNacionality &
        !!formik.values.representativeCURP &
        !!formik.values.representativeRFC &
        !!formik.values.representativeID
      ) {
        setCompletedSteps(
          completedSteps.map((step, i) => {
            if (i === activeStep) return true;
            return step;
          })
        );
      } else {
        setCompletedSteps(
          completedSteps.map((step, i) => {
            if (i === activeStep) return false;
            return step;
          })
        );
      }

      break;

    default:
      break;
  }
};

export const errorAlert = (error, title) => {
  Swal.fire({
    icon: "error",
    title,
    text: error,
  });
};
