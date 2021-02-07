import React from "react";
import Dialog from "@material-ui/core/Dialog";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}

const Modal = ({ children, isOpen, close }: ModalProps) => {
  return (
    <Dialog onClose={close} open={isOpen} aria-labelledby="Connection Modal">
      {children}
    </Dialog>
  );
};

export default Modal;
