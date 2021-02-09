import { createAction } from "@reduxjs/toolkit"

export const setApplicationError = createAction<{
  appStatus: boolean
  message: string
}>("app/setApplicationError")

export const setOpenModal = createAction<{ openModal: boolean }>(
  "app/setOpenModal"
)

export const setCloseModal = createAction<{ openModal: boolean }>(
  "app/setCloseModal"
)
