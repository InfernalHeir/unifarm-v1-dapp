import { createReducer } from '@reduxjs/toolkit'
import { setTransactionStatus } from './actions'

export enum TXSTATUS {
  PENDING,
  CONFIRMED,
  CANCEL
}

interface TransactionState {
  status?: TXSTATUS
  tokens?: number
}

const initialTransactionState: TransactionState = {}

export const transaction = createReducer<TransactionState>(
  initialTransactionState,
  (builder) => {
    builder.addCase(
      setTransactionStatus,
      (state, { payload: { status, tokens } }) => {
        return {
          ...state,
          status,
          tokens
        }
      }
    )
  }
)
