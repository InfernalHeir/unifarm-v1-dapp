import { createReducer } from "@reduxjs/toolkit";
import { setApplicationError, setOpenModal } from "./action";

interface IAppState {
  appStatus: boolean;
  message: string | null;
  openModal: boolean;
}

const initialAppState: IAppState = {
  appStatus: false,
  message: null,
  openModal: false,
};

export const appReducer = createReducer<IAppState>(
  initialAppState,
  (builder) => {
    builder.addCase(
      setApplicationError,
      (state, { payload: { appStatus, message } }) => {
        return {
          ...state,
          appStatus,
          message,
        };
      }
    ),
      builder.addCase(setOpenModal, (state, { payload: { openModal } }) => {
        return {
          ...state,
          openModal,
        };
      });
  }
);
