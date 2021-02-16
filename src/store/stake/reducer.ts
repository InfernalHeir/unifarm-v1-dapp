import { createReducer } from '@reduxjs/toolkit'
import { InputMaxButton, setTokenDetails, TypeInput } from './action'

export interface IStakeInfo {
  stakingAmount?: number
  decimals: number | null
  tokenAddress: string | null
  icon: string | null
  name: string | null
  isSelected?: boolean
  v1: boolean
  v2: boolean
}

const initialStateOfStake: IStakeInfo = {
  stakingAmount: 0,
  decimals: null,
  tokenAddress: null,
  icon: null,
  name: null,
  isSelected: false,
  v1: false,
  v2: false
}

export const stakeReducer = createReducer<IStakeInfo>(
  initialStateOfStake,
  (builder) => {
    builder.addCase(
      setTokenDetails,
      (
        state,
        { payload: { icon, name, decimals, isSelected, tokenAddress, v1, v2 } }
      ) => {
        return {
          ...state,
          icon,
          name,
          decimals,
          isSelected,
          tokenAddress,
          v1,
          v2
        }
      }
    ),
      builder.addCase(TypeInput, (state, { payload: { stakingAmount } }) => {
        return {
          ...state,
          stakingAmount
        }
      }),
      builder.addCase(
        InputMaxButton,
        (state, { payload: { stakingAmount } }) => {
          return {
            ...state,
            stakingAmount
          }
        }
      )
  }
)
