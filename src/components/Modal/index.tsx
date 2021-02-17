import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Zoom";
import styled from "styled-components";

const StyledDialog = styled(Dialog)`
  border-radius: 20px !important;
  padding: 12px !important;
`;

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}

const Modal = ({ children, isOpen, close }: ModalProps) => {
  return (
    <StyledDialog
      maxWidth="sm"
      onClose={close}
      open={isOpen}
      aria-labelledby="Unifarm Modal"
      TransitionComponent={Zoom}
    >
      {children}
    </StyledDialog>
  );
};

export default Modal;
