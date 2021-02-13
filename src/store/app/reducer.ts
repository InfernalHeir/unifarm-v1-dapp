import { createReducer } from '@reduxjs/toolkit'
import {
  setApplicationError,
  setApplicationSuccess,
  setApproveModal,
  setCloseModal,
  setLoader,
  setOpenModal
} from './action'

interface IAppState {
  appError: boolean
  appSuccess: boolean
  message?: string | null
  openModal: boolean
  appRoveModal: boolean
  loading?: boolean
}

const initialAppState: IAppState = {
  appError: false,
  appSuccess: false,
  message: null,
  openModal: false,
  appRoveModal: false,
  loading: false
}

export const app = createReducer<IAppState>(initialAppState, (builder) => {
  builder.addCase(
    setApplicationError,
    (state, { payload: { appError, message } }) => {
      return {
        ...state,
        appError,
        message
      }
    }
  ),
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
    builder.addCase(setLoader, (state, { payload: { loading } }) => {
      return {
        ...state,
        loading
      }
    }),
    builder.addCase(
      setApplicationSuccess,
      (state, { payload: { appSuccess, message } }) => {
        return {
          ...state,
          appSuccess,
          message
        }
      }
    ),
    builder.addCase(setApproveModal, (state, { payload: { appRoveModal } }) => {
      return {
        ...state,
        appRoveModal
      }
    })
})
