import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { app } from './app/reducer'
import { stakeReducer } from './stake/reducer'
import { poolReducer } from './pools/reducer'
import { info } from './info/reducer'
import { transaction } from './transactions/reducer'

const reducers = {
  app,
  stakeReducer,
  poolReducer,
  info,
  transaction
}

const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware()],
  devTools: true
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
