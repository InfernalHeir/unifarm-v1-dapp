import { createReducer } from "@reduxjs/toolkit";
import { setApplicationError } from "./action";

type AppStatus = boolean | null;

interface IAppState {
  appStatus: AppStatus;
  message?: string;
}

const initialAppState: IAppState = {
  appStatus: false,
  message: "Hello",
};
export const appReducer = createReducer<IAppState>(
  initialAppState,
  (builder) => {
    builder.addCase(
      setApplicationError,
      (state, { payload: { appStatus, message } }) => {
        return {
          appStatus,
          message,
        };
      }
    );
  }
);
