import { createAction } from '@reduxjs/toolkit'
import { TXSTATUS } from './reducer'

export const setTransactionStatus = createAction<{
  status: TXSTATUS
  tokens: number
}>('transactions/setTransactionStatus')
