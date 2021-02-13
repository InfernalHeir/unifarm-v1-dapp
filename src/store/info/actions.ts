import { createAction } from "@reduxjs/toolkit"
import { StakingInfo } from "./reducer"

export const setUserStakingDetails = createAction<StakingInfo>(
  "info/setUserStakingDetails"
)
