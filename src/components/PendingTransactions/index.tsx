import React from 'react'
import Modal from '../Modal'
import { DiglogHeader } from '../Web3Modal'
import { useModalStatus, useCloseModal } from '../../store/app/hooks'
import { ModalTypes } from '../../store/app/reducer'
import { useTxStatus } from '../../store/transactions/hooks'
import { TXSTATUS } from '../../store/transactions/reducer'

const PendingTransactions = () => {
  // for checking trasaction status
  const txStatus = useTxStatus()

  // close this modal
  const close = useCloseModal()

  const getTransactionScreens = () => {
    return (
      <>
        <DiglogHeader>Transaction Confirmation</DiglogHeader>
        <h1>Loading</h1>
      </>
    )
  }

  const isOpen = useModalStatus(ModalTypes.PENDING_TX)
  return (
    <Modal isOpen={isOpen} close={close}>
      {getTransactionScreens()}
    </Modal>
  )
}

export default PendingTransactions
