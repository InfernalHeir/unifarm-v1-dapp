import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { appReducer } from "./app/reducer";

const reducers = {
  appReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware()],
  devTools: true,
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
