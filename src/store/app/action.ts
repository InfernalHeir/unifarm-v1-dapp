import { createAction } from '@reduxjs/toolkit'
import { ModalTypes } from './reducer'

export const setOpenModal = createAction<{ openModal: ModalTypes }>(
  'app/setOpenModal'
)
export const setCloseModal = createAction<{ openModal: null }>(
  'app/setCloseModal'
)
export const setLoader = createAction<{ globalLoader: boolean }>(
  'app/setLoader'
)
