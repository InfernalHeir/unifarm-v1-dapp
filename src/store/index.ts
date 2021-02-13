import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { app } from "./app/reducer"
import { stakeReducer } from "./stake/reducer"
import { poolReducer } from "./pools/reducer"
import { InfoReducer } from "./info/reducer"

const reducers = {
  app,
  stakeReducer,
  poolReducer,
  InfoReducer
}

const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware()],
  devTools: true
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
