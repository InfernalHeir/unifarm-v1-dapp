import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTransactionStatus } from './actions'
import { TXSTATUS } from './reducer'
import { AppState, AppDispatch } from '../index'

export const useSetTransactionStatus = () => {
  const dispatch = useDispatch<AppDispatch>()
  return useCallback(
    (status: TXSTATUS, tokens: number) => {
      dispatch(
        setTransactionStatus({
          status,
          tokens
        })
      )
    },
    [dispatch]
  )
}


export const useTxStatus = () => {
  return useSelector((state: AppState) => state.transaction)
}
