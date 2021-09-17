import React, { useState } from "react";
import Swal from "sweetalert2";
import UserForm from "../../components/UserForm/UserForm";
import BasicModal from "../../components/BasicModal/BasicModal";
import { HeadContainer, ButtonContainer, StyledButton } from "./Style";

const Users = () => {
  const steps = [
    "Datos generales",
    "Datos particulares",
    "Documentación y datos bancarios",
    "Representante Legal",
    "Beneficiario",
  ];
  const [showModal, setShowModal] = useState(false);
  const [onSaving, setOnSaving] = useState(false);

  const onClose = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Se perderá lo ingresado",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "No cerrar",
      denyButtonText: "Cerrar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isDenied) {
        setShowModal(false);
      }
    });
  };

  return (
    <div>
      <HeadContainer>
        <ButtonContainer>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Agregar Usuario
          </StyledButton>
        </ButtonContainer>
      </HeadContainer>
      <BasicModal show={showModal} onClose={onClose} size="large">
        <UserForm
          steps={steps}
          setShowModal={setShowModal}
          setOnSaving={setOnSaving}
          onSaving={onSaving}
        />
      </BasicModal>
    </div>
  );
};

export default Users;
