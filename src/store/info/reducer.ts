import { createReducer } from '@reduxjs/toolkit'
import { setUserStakingDetails } from './actions'

export interface StakeInfoData {
  Mystakes: number[]
  DaysStaked: number[]
  poolName?: string
  tokenNames?: string[]
  stakeID?: number[]
  isActive?: boolean[]
  poolIcon?: string
  rewardsSequenceSrc?: string[]
  myRewards: number[]
  Apy?: string
  lockIn?: string
  maxStakingLimit: number
  network?: string
  isUnstakeDisable?: boolean
  typeFor?: string
  isLockIn?: boolean // 2x
}

export interface StakingInfo {
  stakingPayload?: StakeInfoData[]
}

const initialStake: StakingInfo = {
  stakingPayload: []
}

export const info = createReducer<StakingInfo>(initialStake, (builder) => {
  builder.addCase(
    setUserStakingDetails,
    (state, { payload: { stakingPayload } }) => {
      return {
        ...state,
        stakingPayload
      }
    }
  )
})
