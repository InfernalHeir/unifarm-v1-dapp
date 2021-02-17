import { createAction } from '@reduxjs/toolkit'
import { StakeInfoData } from './reducer'

export const setUserStakingDetails = createAction<{
  stakingPayload: StakeInfoData[]
}>('info/setUserStakingDetails')
