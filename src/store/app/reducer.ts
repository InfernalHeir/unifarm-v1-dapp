import { createReducer } from '@reduxjs/toolkit'

import { setCloseModal, setLoader, setOpenModal } from './action'

export enum ModalTypes {
  WALLET,
  PENDING_TX,
  APPROVE_STAKE
}

interface IAppState {
  openModal: ModalTypes | null
  globalLoader?: boolean
}

const initialAppState: IAppState = {
  openModal: null,
  globalLoader: false
}

export const app = createReducer<IAppState>(initialAppState, (builder) => {
  builder.addCase(setOpenModal, (state, { payload: { openModal } }) => {
    return {
      ...state,
      openModal
    }
  }),
    builder.addCase(setCloseModal, (state, { payload: { openModal } }) => {
      return {
        ...state,
        openModal
      }
    }),
    builder.addCase(setLoader, (state, { payload: { globalLoader } }) => {
      return {
        ...state,
        globalLoader
      }
    })
})
