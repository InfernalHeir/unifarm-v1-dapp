import { createAction } from "@reduxjs/toolkit";

export const setApplicationError = createAction<{
  appStatus: boolean;
  message: string;
}>("app/setApplicationError");
