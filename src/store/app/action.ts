import { createAction } from "@reduxjs/toolkit";

export const setApplicationError = createAction<{
  appError: boolean;
  message?: string;
}>("app/setApplicationError");

export const setOpenModal = createAction<{ openModal: boolean }>(
  "app/setOpenModal"
);

export const setCloseModal = createAction<{ openModal: boolean }>(
  "app/setCloseModal"
);

export const setApplicationSuccess = createAction<{
  appSuccess: boolean;
  message?: string;
}>("app/setApplicationSuccess");

export const setLoader = createAction<{ loading: boolean }>("app/setLoader");
