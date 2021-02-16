import { createAction } from '@reduxjs/toolkit'

export const setTokenDetails = createAction<{
  decimals: number
  tokenAddress?: string
  name: string
  icon: string
  isSelected?: boolean
  v1: boolean
  v2: boolean
}>('stake/setStakingDetails')

export const TypeInput = createAction<{ stakingAmount: number }>(
  'stake/TypeInput'
)

export const InputMaxButton = createAction<{ stakingAmount: number }>(
  'stake/InputMaxButton'
)
