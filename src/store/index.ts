import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { app } from './app/reducer'
import { stakeReducer } from './stake/reducer'
import { poolReducer } from './pools/reducer'
<<<<<<< HEAD
import { InfoReducer } from './info/reducer'
=======
import { info } from './info/reducer'
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
import { transaction } from './transactions/reducer'

const reducers = {
  app,
  stakeReducer,
  poolReducer,
<<<<<<< HEAD
  InfoReducer,
=======
  info,
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
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
