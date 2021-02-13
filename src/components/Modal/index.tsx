import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { Zoom } from '@material-ui/core'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  close: () => void
}

const Modal = ({ children, isOpen, close }: ModalProps) => {
  return (
    <Dialog
      maxWidth="sm"
      onClose={close}
      open={isOpen}
      aria-labelledby="Connection Modal"
    >
      {children}
    </Dialog>
  )
}

export default Modal
