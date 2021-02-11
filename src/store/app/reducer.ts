import { createReducer } from "@reduxjs/toolkit";
import {
  setApplicationError,
  setCloseModal,
  setLoader,
  setOpenModal
} from "./action";

interface IAppState {
  appStatus: boolean;
  message?: string | null;
  openModal: boolean;
  loading?: boolean;
}

const initialAppState: IAppState = {
  appStatus: true,
  message: null,
  openModal: false,
  loading: false
};

export const app = createReducer<IAppState>(initialAppState, (builder) => {
  builder.addCase(
    setApplicationError,
    (state, { payload: { appStatus, message } }) => {
      return {
        ...state,
        appStatus,
        message
      };
    }
  ),
    builder.addCase(setOpenModal, (state, { payload: { openModal } }) => {
      return {
        ...state,
        openModal
      };
    }),
    builder.addCase(setCloseModal, (state, { payload: { openModal } }) => {
      return {
        ...state,
        openModal
      };
    }),
    builder.addCase(setLoader, (state, { payload: { loading } }) => {
      return {
        ...state,
        loading
      };
    });
});
