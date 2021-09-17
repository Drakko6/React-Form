import React from "react";
import { Modal } from "@material-ui/core";
import { ModalChildrenContainer, OnCloseIcon } from "./Style";

const BasicModal = ({ show, children, onClose, size }) => {
  return (
    <Modal open={show} onClose={() => onClose()}>
      <ModalChildrenContainer size={size}>
        <div style={{ display: "flex" }}>
          <OnCloseIcon onClick={() => onClose()} />
        </div>
        {children}
      </ModalChildrenContainer>
    </Modal>
  );
};

export default BasicModal;
