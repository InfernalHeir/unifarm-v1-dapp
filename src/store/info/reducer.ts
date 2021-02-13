import { createReducer } from '@reduxjs/toolkit'
import { setUserStakingDetails } from './actions'

export interface StakeInfoData {
  Mystakes: number
  DaysStaked: number[]
  poolName?: string
  tokenNames?: any[]
  stakeID?: any[]
  stakeAmount?: any[]
  isActive?: any[]
  poolIcon?: string
  rewardsSequenceSrc?: string[]
  myRewards: number[]
  Apy?: string | null
  lockIn?: string
  maxStakingLimit: number
  network?: string
  isUnstakeDisable?: boolean
  typeFor?: string
  isLockIn?: boolean // 2x
  unStakeData?: any[]
}

export interface StakingInfo {
  stakeLoader: boolean
  stakingPayload?: StakeInfoData[] | null
}

const InitialStakeInfoStake: StakingInfo = {
  stakeLoader: false,
  stakingPayload: null
}

export const InfoReducer = createReducer<StakingInfo>(
  InitialStakeInfoStake,
  (builder) => {
    builder.addCase(
      setUserStakingDetails,
      (state, { payload: { stakeLoader, stakingPayload } }) => {
        return {
          stakeLoader,
          stakingPayload
        }
      }
    )
  }
)
